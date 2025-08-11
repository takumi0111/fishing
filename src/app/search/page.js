'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SearchResults() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const searchParams = useSearchParams();
  const area = searchParams.get('area');
  const fish = searchParams.get('fish');
  const startDate = searchParams.get('startDate');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (area) params.append('area', area);
        if (fish) params.append('fish', fish);
        if (startDate) params.append('startDate', startDate);

        const response = await fetch(`/api/search?${params}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || '検索に失敗しました');
        }

        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [area, fish, startDate]);

  // 検索条件の表示名を取得
  const getDisplayName = (type, value) => {
    const names = {
      area: {
        // 北海道・東北
        'hokkaido': '北海道',
        'tohoku': '東北地方全域',
        'aomori': '青森県',
        'miyagi': '宮城県',
        'fukushima': '福島県',
        
        // 関東
        'tokyo': '東京湾',
        'kanagawa': '神奈川県',
        'chiba': '千葉県',
        'ibaraki': '茨城県',
        'kanto': '関東地方全域',
        
        // 東海・中部
        'aichi': '愛知県',
        'shizuoka': '静岡県',
        'mie': '三重県',
        'tokai': '東海地方全域',
        'niigata': '新潟県',
        'ishikawa': '石川県',
        
        // 関西
        'osaka': '大阪湾',
        'hyogo': '兵庫県',
        'wakayama': '和歌山県',
        'kansai': '関西地方全域',
        
        // 中国・四国
        'hiroshima': '広島県',
        'okayama': '岡山県',
        'kagawa': '香川県',
        'ehime': '愛媛県',
        'chugoku-shikoku': '中国・四国全域',
        
        // 九州・沖縄
        'fukuoka': '福岡県',
        'kumamoto': '熊本県',
        'kagoshima': '鹿児島県',
        'okinawa': '沖縄県',
        'kyushu': '九州・沖縄全域'
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
        <header className="bg-blue-600 text-white shadow-lg">
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
            <a 
              href="/" 
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            >
              新しい検索
            </a>
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
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                🐟 {getDisplayName('fish', fish)}
              </span>
            )}
            {startDate && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                📅 {new Date(startDate).toLocaleDateString('ja-JP')}
              </span>
            )}
          </div>
        </div>

        {/* 検索結果 */}
        {results?.data?.recommendations && results.data.recommendations.length > 0 ? (
          <>
            <div className="space-y-6">
              {results.data.recommendations.map((spot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="mb-2">
                        <Link 
                          href={`/spot?spotName=${encodeURIComponent(spot.name)}`}
                          className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer hover:underline"
                        >
                          {spot.name}
                        </Link>
                      </div>
                      <p className="text-gray-600 mb-2">{spot.location}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {spot.difficulty}
                        </span>
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

                    {spot.tips && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">釣りのコツ</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{spot.tips}</p>
                      </div>
                    )}

                    {spot.access && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">アクセス</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{spot.access}</p>
                      </div>
                    )}

                    {spot.facilities && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">周辺施設</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{spot.facilities}</p>
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

            {/* 生成情報 */}
            {results.data && (
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-4 text-center text-xs text-gray-500">
                  <span className="font-semibold">情報生成日時:</span> {results.data.generatedAt}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-6xl mb-4">🎣</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">該当する釣りスポットが見つかりませんでした</h2>
              <p className="text-gray-600 mb-4">検索条件を変更して、もう一度お試しください。</p>
              <a 
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                新しい検索をする
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
