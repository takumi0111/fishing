'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// 型定義
interface SearchResults {
  success: boolean;
  data: {
    spots: FishingSpot[];
    generatedAt: string;
  };
  searchParams: {
    area?: string;
    fish?: string;
    startDate?: string;
  };
  error?: string;
}

interface FishingSpot {
  name: string;
  location: string;
  description: string;
  features?: string[];
  facilities?: string[];
  difficulty?: number;
  targetFish?: string[];
  tips?: string;
  access?: string;
  safetyInfo?: string;
}

export default function SearchResults(): React.JSX.Element {
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const area = searchParams.get('area');
  const fish = searchParams.get('fish');
  const startDate = searchParams.get('startDate');

  useEffect(() => {
    // 検索パラメータが何もない場合は検索しない
    if (!area && !fish && !startDate) {
      setLoading(false);
      setError('検索条件が指定されていません');
      return;
    }

    // AbortControllerで重複リクエストをキャンセル
    const abortController = new AbortController();

    const fetchResults = async (): Promise<void> => {
      try {
        console.log('検索開始:', { area, fish, startDate });
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (area) params.append('area', area);
        if (fish) params.append('fish', fish);
        if (startDate) params.append('startDate', startDate);

        const response = await fetch(`/api/search?${params}`, {
          signal: abortController.signal
        });
        
        // リクエストがキャンセルされた場合は処理を中断
        if (abortController.signal.aborted) return;
        
        const data: SearchResults = await response.json();

        if (!response.ok) {
          throw new Error(data.error || '検索に失敗しました');
        }

        console.log('検索完了:', data);
        setResults(data);
      } catch (err) {
        // AbortErrorは無視
        if (err instanceof DOMException && err.name === 'AbortError') {
          console.log('検索がキャンセルされました');
          return;
        }
        
        const errorMessage = err instanceof Error ? err.message : '不明なエラーが発生しました';
        console.error('検索エラー:', errorMessage);
        setError(errorMessage);
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchResults();

    // クリーンアップ関数で進行中のリクエストをキャンセル
    return () => {
      abortController.abort();
    };
  }, [area, fish, startDate]);

  // 検索条件の表示名を取得
  const getDisplayName = (type: string, value: string): string => {
    const names: Record<string, Record<string, string>> = {
      prefecture: {
        'hokkaido': '北海道', 'tohoku': '東北', 'aomori': '青森県', 'miyagi': '宮城県', 'fukushima': '福島県',
        'tokyo': '東京都', 'kanagawa': '神奈川県', 'chiba': '千葉県', 'ibaraki': '茨城県', 'kanto': '関東',
        'aichi': '愛知県', 'shizuoka': '静岡県', 'gifu': '岐阜県', 'mie': '三重県', 'chubu': '中部',
        'osaka': '大阪府', 'kyoto': '京都府', 'hyogo': '兵庫県', 'nara': '奈良県', 'kansai': '関西',
        'hiroshima': '広島県', 'okayama': '岡山県', 'yamaguchi': '山口県', 'chugoku': '中国',
        'fukuoka': '福岡県', 'nagasaki': '長崎県', 'kumamoto': '熊本県', 'oita': '大分県', 'kyushu': '九州'
      },
      method: {
        'shore': '堤防・岸壁',
        'boat': '船釣り',
        'raft': 'いかだ',
        'surf': 'サーフ',
        'rock': '磯釣り'
      },
      fish: {
        'aji': 'アジ',
        'saba': 'サバ',
        'iwashi': 'イワシ',
        'mebaru': 'メバル',
        'kasago': 'カサゴ',
        'kisu': 'キス',
        'tai': 'マダイ',
        'suzuki': 'スズキ',
        'aorika': 'アオリイカ',
        'hirame': 'ヒラメ'
      }
    };
    return names[type]?.[value] || value;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center">🎣 検索結果</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">AIが最適な釣りスポットを検索中...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center">🎣 検索結果</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-2">検索エラー</h2>
              <p className="text-red-600">{error}</p>
              <button 
                onClick={() => window.history.back()}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                戻る
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* ヘッダー */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">🎣 検索結果</h1>
            <Link 
              href="/" 
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            >
              新しい検索
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 検索条件の表示 */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">検索条件</h2>
          <div className="flex flex-wrap gap-2">
            {area && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                📍 {getDisplayName('area', area)}
              </span>
            )}
            {fish && (
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">
                🐟 {getDisplayName('fish', fish)}
              </span>
            )}
            {startDate && (
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                📅 {new Date(startDate).toLocaleDateString('ja-JP')}
              </span>
            )}
          </div>
        </div>

        {/* 検索結果 */}
        {results?.data?.spots && results.data.spots.length > 0 ? (
          <>
            <div className="space-y-6">
              {results.data.spots.map((spot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="mb-2">
                        <Link 
                          href={`/spot?spotName=${encodeURIComponent(spot.name)}&location=${encodeURIComponent(spot.location)}`}
                          className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer hover:underline"
                        >
                          {spot.name}
                        </Link>
                      </div>
                      <p className="text-gray-600 mb-2">{spot.location}</p>
                      <div className="flex items-center gap-4 text-sm">
                        {spot.difficulty && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded flex items-center gap-1">
                            ❤️ 人気度: {spot.difficulty}/5
                          </span>
                        )}
                        {spot.targetFish && (
                          <span className="text-gray-600">
                            🐟 {spot.targetFish.join(', ')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">スポット詳細</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{spot.description}</p>
                    </div>

                    {spot.features && spot.features.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">特徴</h4>
                        <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside">
                          {spot.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {spot.access && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">アクセス</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{spot.access}</p>
                      </div>
                    )}

                    {spot.facilities && spot.facilities.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">周辺施設</h4>
                        <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside">
                          {spot.facilities.map((facility, idx) => (
                            <li key={idx}>{facility}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {spot.safetyInfo && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">安全上の注意</h4>
                        <p className="text-red-600 text-sm leading-relaxed">{spot.safetyInfo}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-6xl mb-4">🎣</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">該当する釣りスポットが見つかりませんでした</h2>
              <p className="text-gray-600 mb-4">検索条件を変更して、もう一度お試しください。</p>
              <Link 
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                新しい検索をする
              </Link>
            </div>
          </div>
        )}

        {/* AI生成についての説明 */}
        {results && (
          <div className="mt-8 text-center text-sm text-gray-500 border-t pt-4">
            <p>
              🤖 この検索結果は Gemini AI が生成した情報です。各種釣り情報サイト、自治体の観光情報、釣り場ガイドなどを参考に作成されています。
              <br />
              実際の釣行前には最新の情報や安全情報をご確認ください。天候や潮汐、釣り場の状況は変化する可能性があります。
            </p>
            <p className="mt-2 text-xs text-gray-400">
              生成日時: {results.data.generatedAt}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
