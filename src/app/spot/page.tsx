'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// 型定義
interface SpotDetailData {
  spotName: string;
  location: string;
  detailedInfo: {
    description: string;
    features: string[];
    facilities: string[];
    access: string;
    bestTimes: string[];
    targetFish: string[];
    difficulty: number;
    safetyNotes: string[];
    regulations: string[];
    sources: SourceInfo[];
    lastUpdated: string;
  };
}

interface SourceInfo {
  title: string;
  url: string;
  type: 'official' | 'tackle_shop' | 'fishing_guide' | 'tourism' | 'news' | 'community';
}

interface SpotDetailResponse {
  success: boolean;
  data: SpotDetailData;
  generatedAt: string;
  error?: string;
}

interface QuestionResponse {
  spotName: string;
  question: string;
  answer: string;
  relatedInfo: Array<{
    title: string;
    description: string;
  }>;
  recommendedSites: Array<{
    title: string;
    url: string;
    description: string;
    category: string;
  }>;
}

export default function SpotDetail(): React.JSX.Element {
  const [spotData, setSpotData] = useState<SpotDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [questionResponse, setQuestionResponse] = useState<QuestionResponse | null>(null);
  const [questionLoading, setQuestionLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const spotName = searchParams.get('spotName');
  const location = searchParams.get('location');

  useEffect(() => {
    if (!spotName) return;

    const fetchSpotDetail = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        
        const params = new URLSearchParams();
        params.append('spotName', spotName);
        if (location) params.append('location', location);
        
        const response = await fetch(`/api/spot-detail?${params}`);
        const data: SpotDetailResponse = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'スポット詳細の取得に失敗しました');
        }
        
        setSpotData(data.data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '不明なエラーが発生しました';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotDetail();
  }, [spotName, location]);

  const handleQuestionSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!question.trim()) return;

    try {
      setQuestionLoading(true);
      setQuestionResponse(null);
      
      const response = await fetch('/api/spot-detail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          spotName,
          question: question.trim(),
          location: location || ''
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || '質問の処理に失敗しました');
      }
      
      setQuestionResponse(data.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '不明なエラーが発生しました';
      setError(errorMessage);
    } finally {
      setQuestionLoading(false);
    }
  };

  if (!spotName) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center">🎣 スポット詳細</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-2">エラー</h2>
              <p className="text-red-600">スポット名が指定されていません</p>
              <Link 
                href="/"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                ホームに戻る
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center">🎣 スポット詳細</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">スポット詳細を取得中...</p>
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
            <h1 className="text-2xl font-bold text-center">🎣 スポット詳細</h1>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-2">エラー</h2>
              <p className="text-red-600">{error}</p>
              <div className="flex gap-4 justify-center mt-4">
                <button 
                  onClick={() => window.history.back()}
                  className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  戻る
                </button>
                <Link 
                  href="/"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  ホームに戻る
                </Link>
              </div>
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
            <h1 className="text-2xl font-bold">🎣 スポット詳細</h1>
            <div className="flex gap-4">
              <button 
                onClick={() => window.history.back()}
                className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
              >
                戻る
              </button>
              <Link 
                href="/" 
                className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
              >
                ホーム
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {spotData && (
          <div className="max-w-4xl mx-auto">
            {/* スポット基本情報 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{spotData.spotName}</h2>
              <p className="text-gray-600 mb-4">{spotData.location}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">詳細情報</h3>
                <p className="text-gray-600 leading-relaxed">{spotData.detailedInfo.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 特徴 */}
                {spotData.detailedInfo.features && spotData.detailedInfo.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">🌟 特徴</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {spotData.detailedInfo.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 施設 */}
                {spotData.detailedInfo.facilities && spotData.detailedInfo.facilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">🏢 周辺施設</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {spotData.detailedInfo.facilities.map((facility, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 対象魚 */}
                {spotData.detailedInfo.targetFish && spotData.detailedInfo.targetFish.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">🐟 釣れる魚</h4>
                    <div className="flex flex-wrap gap-2">
                      {spotData.detailedInfo.targetFish.map((fish, index) => (
                        <span 
                          key={index} 
                          className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                        >
                          {fish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 人気度 */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">⭐ 人気度</h4>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star} 
                          className={`text-xl ${
                            star <= spotData.detailedInfo.difficulty 
                              ? 'text-red-500' 
                              : 'text-gray-300'
                          }`}
                        >
                          ❤️
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {spotData.detailedInfo.difficulty}/5
                    </span>
                  </div>
                </div>
              </div>

              {/* アクセス */}
              {spotData.detailedInfo.access && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-700 mb-2">🚗 アクセス</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{spotData.detailedInfo.access}</p>
                </div>
              )}

              {/* 最適な時間帯 */}
              {spotData.detailedInfo.bestTimes && spotData.detailedInfo.bestTimes.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-700 mb-2">⏰ 最適な時間帯</h4>
                  <div className="flex flex-wrap gap-2">
                    {spotData.detailedInfo.bestTimes.map((time, index) => (
                      <span 
                        key={index} 
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 安全注意事項 */}
              {spotData.detailedInfo.safetyNotes && spotData.detailedInfo.safetyNotes.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-red-700 mb-2">⚠️ 安全上の注意</h4>
                  <ul className="text-red-600 text-sm space-y-1">
                    {spotData.detailedInfo.safetyNotes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 規則・ルール */}
              {spotData.detailedInfo.regulations && spotData.detailedInfo.regulations.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-blue-700 mb-2">📋 規則・ルール</h4>
                  <ul className="text-blue-600 text-sm space-y-1">
                    {spotData.detailedInfo.regulations.map((regulation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{regulation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 質問フォーム */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">💬 このスポットについて質問</h3>
              <form onSubmit={handleQuestionSubmit} className="space-y-4">
                <div>
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="例: 初心者におすすめの仕掛けは？、駐車場はありますか？"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
                <button
                  type="submit"
                  disabled={questionLoading || !question.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {questionLoading ? '回答生成中...' : '質問する'}
                </button>
              </form>

              {/* 質問の回答 */}
              {questionResponse && (
                <div className="mt-6 border-t pt-6">
                  <h4 className="font-semibold text-gray-700 mb-2">質問: {questionResponse.question}</h4>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <p className="text-gray-700 leading-relaxed">{questionResponse.answer}</p>
                  </div>

                  {/* 関連情報 */}
                  {questionResponse.relatedInfo && questionResponse.relatedInfo.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-700 mb-2">関連情報</h5>
                      <div className="space-y-2">
                        {questionResponse.relatedInfo.map((info, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded">
                            <h6 className="font-medium text-gray-700">{info.title}</h6>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 推奨サイト */}
                  {questionResponse.recommendedSites && questionResponse.recommendedSites.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">参考サイト</h5>
                      <div className="space-y-2">
                        {questionResponse.recommendedSites.map((site, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded">
                            <a 
                              href={site.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-medium text-blue-600 hover:text-blue-800"
                            >
                              {site.title}
                            </a>
                            <p className="text-gray-600 text-sm">{site.description}</p>
                            <span className="text-xs text-gray-500">{site.category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 参考情報源 */}
            {spotData.detailedInfo.sources && spotData.detailedInfo.sources.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">🔗 参考情報源</h3>
                <div className="space-y-3">
                  {spotData.detailedInfo.sources.map((source, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        {source.title}
                      </a>
                      <p className="text-xs text-gray-500 mt-1">{source.type}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  最終更新: {spotData.detailedInfo.lastUpdated}
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
