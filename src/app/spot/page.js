'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SpotDetail() {
  const [spotData, setSpotData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState('');
  const [questionResponse, setQuestionResponse] = useState(null);
  const [questionLoading, setQuestionLoading] = useState(false);

  const searchParams = useSearchParams();
  const spotName = searchParams.get('spotName');

  useEffect(() => {
    if (spotName) {
      fetchSpotDetail();
    }
  }, [spotName]);

  const fetchSpotDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/spot-detail?spotName=${encodeURIComponent(spotName)}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'スポット詳細の取得に失敗しました');
      }
      
      setSpotData(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    try {
      setQuestionLoading(true);
      setQuestionResponse(null);
      
      const response = await fetch(
        `/api/spot-detail?spotName=${encodeURIComponent(spotName)}&question=${encodeURIComponent(question)}`
      );
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || '質問の処理に失敗しました');
      }
      
      setQuestionResponse(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setQuestionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">スポット情報を読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-red-800 mb-2">エラーが発生しました</h2>
            <p className="text-red-700 mb-4">{error}</p>
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              ← ホームに戻る
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">スポット詳細</h1>
            <div></div>
          </div>

          {spotData && (
            <div className="space-y-6">
              {/* スポット基本情報 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                  🎣 {spotData.spotName}
                </h2>
                
                {spotData.overview && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">概要</h3>
                    <p className="text-gray-600 leading-relaxed">{spotData.overview}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* ベストシーズン */}
                  {spotData.bestSeasons && spotData.bestSeasons.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                        🌸 ベストシーズン
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {spotData.bestSeasons.map((season, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {season}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 釣れる魚 */}
                  {spotData.targetFish && spotData.targetFish.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                        🐟 釣れる魚
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {spotData.targetFish.map((fish, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {fish}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* アクセス */}
                {spotData.access && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      🚗 アクセス
                    </h3>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded">{spotData.access}</p>
                  </div>
                )}

                {/* 設備 */}
                {spotData.facilities && spotData.facilities.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      🏢 設備・施設
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {spotData.facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 釣りのコツ */}
                {spotData.tips && spotData.tips.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      💡 釣りのコツ
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {spotData.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 安全上の注意 */}
                {spotData.safetyNotes && spotData.safetyNotes.length > 0 && (
                  <div className="mt-6 bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-700 mb-2 flex items-center">
                      ⚠️ 安全上の注意
                    </h3>
                    <ul className="list-disc list-inside text-red-600 space-y-1">
                      {spotData.safetyNotes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 質問フォーム */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  💬 このスポットについて質問する
                </h3>
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                      例：「{spotName}の釣り情報についてまとめてあるサイトを教えて」
                    </label>
                    <textarea
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder={`${spotName}について何でもお聞きください...`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows="3"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={questionLoading || !question.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center"
                  >
                    {questionLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        回答を生成中...
                      </>
                    ) : (
                      '質問する'
                    )}
                  </button>
                </form>
              </div>

              {/* 質問への回答 */}
              {questionResponse && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    💡 回答
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600 mb-2">質問:</p>
                    <p className="font-medium text-gray-800">{questionResponse.question}</p>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{questionResponse.answer}</p>
                  </div>

                  {/* 関連情報 */}
                  {questionResponse.relatedInfo && questionResponse.relatedInfo.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-700 mb-2">関連情報</h4>
                      <div className="space-y-2">
                        {questionResponse.relatedInfo.map((info, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded">
                            <h5 className="font-medium text-gray-800">{info.title}</h5>
                            <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 推奨サイト */}
                  {questionResponse.recommendedSites && questionResponse.recommendedSites.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-700 mb-2">参考サイト</h4>
                      <div className="space-y-2">
                        {questionResponse.recommendedSites.map((site, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-800">{site.title}</h5>
                              <p className="text-sm text-gray-600 mt-1">{site.description}</p>
                            </div>
                            {site.url && site.url.startsWith('http') && (
                              <a 
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs hover:bg-blue-200 transition-colors whitespace-nowrap"
                              >
                                サイトを見る 🔗
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 参考サイト */}
              {spotData.recommendedSites && spotData.recommendedSites.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    🔗 参考サイト
                  </h3>
                  <div className="space-y-3">
                    {spotData.recommendedSites.map((site, index) => (
                      <div key={index} className="border border-gray-200 rounded p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{site.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{site.description}</p>
                            {site.category && (
                              <span className="inline-block mt-2 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {site.category}
                              </span>
                            )}
                          </div>
                          {site.url && site.url.startsWith('http') && (
                            <a 
                              href={site.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
                            >
                              サイトを見る 🔗
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
