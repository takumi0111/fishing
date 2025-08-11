'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SafetyGuide() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">
            🛡️ 海釣り安全ガイド
          </h1>
          <p className="text-center text-blue-100 mt-2">
            安全な釣りのための重要な知識とルール
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 戻るボタン */}
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-md"
          >
            ← ホームに戻る
          </Link>
        </div>

        {/* 緊急時連絡先 */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8">
          <div className="flex items-center">
            <div className="text-2xl mr-3">🚨</div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">緊急時連絡先</h3>
              <p className="text-blue-700">
                海での事故・遭難時：<strong className="text-xl">118番</strong>（海上保安庁）
              </p>
            </div>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap border-b bg-gray-50 rounded-t-lg">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-8 py-4 font-medium transition-all duration-200 ${
                activeTab === 'basic'
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600 rounded-tl-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              📋 基本・装備
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-8 py-4 font-medium transition-all duration-200 ${
                activeTab === 'location'
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              📍 場所・天候別注意点
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`px-8 py-4 font-medium transition-all duration-200 ${
                activeTab === 'emergency'
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600 rounded-tr-lg'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              🚨 緊急時対応
            </button>
          </div>

          <div className="p-8">
            {/* 基本的注意事項 */}
            {activeTab === 'basic' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📋 基本的注意事項と装備</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                      <span className="text-3xl mr-3">🌊</span>
                      出発前の準備
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-lg">天気予報・海況の確認</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-lg font-semibold text-red-600">ライフジャケットの着用（必須）</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-lg">釣行計画の家族への連絡</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-lg">携帯電話の充電確認</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="text-lg">応急処置用品の携帯</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                      <span className="text-3xl mr-3">⚡</span>
                      釣り場での基本ルール
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-lg">単独釣行は避ける</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-lg">滑りやすい場所は避ける</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-lg">波の状況を常に確認</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-lg">無理な移動はしない</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-lg">暗くなる前に帰る</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-yellow-800 mb-6 flex items-center">
                      <span className="text-3xl mr-3">🎣</span>
                      必携装備
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-3 mt-1">•</span>
                        <span className="text-lg font-semibold text-red-600">ライフジャケット（必須）</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-3 mt-1">•</span>
                        <span className="text-lg">滑り止めシューズ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-3 mt-1">•</span>
                        <span className="text-lg">ヘッドライト・懐中電灯</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-3 mt-1">•</span>
                        <span className="text-lg">防寒・防水着</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-3 mt-1">•</span>
                        <span className="text-lg">救急セット</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center">
                      <span className="text-3xl mr-3">📱</span>
                      連絡手段の確保
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-lg">携帯電話の防水対策</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-lg">予備バッテリーの携帯</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-lg">緊急連絡先の確認</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-lg">位置情報の共有設定</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-lg">帰宅予定時刻の連絡</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 場所・天候別注意点 */}
            {activeTab === 'location' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📍 場所・天候別注意点</h2>
                
                <div className="space-y-8">
                  {/* 場所別 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">場所別注意点</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                        <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                          <span className="text-3xl mr-3">🏔️</span>
                          磯場・岩場
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-red-600 mb-2">⚠️ 危険要因</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 高波による転落</li>
                              <li>• 滑りやすい岩場</li>
                              <li>• 満潮時の孤立</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-600 mb-2">✅ 対策</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 潮汐表の事前確認</li>
                              <li>• スパイクシューズ着用</li>
                              <li>• 逃げ道の確保</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-md border-l-4 border-green-500">
                        <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                          <span className="text-3xl mr-3">🌊</span>
                          防波堤・岸壁
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-red-600 mb-2">⚠️ 危険要因</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 夜間の転落事故</li>
                              <li>• 高所からの落下</li>
                              <li>• 強風時の不安定</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-600 mb-2">✅ 対策</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 柵のある場所選択</li>
                              <li>• 十分な照明確保</li>
                              <li>• 滑り止め靴着用</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                        <h4 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                          <span className="text-3xl mr-3">🏖️</span>
                          砂浜・河口
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-red-600 mb-2">⚠️ 危険要因</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 急な深み・離岸流</li>
                              <li>• 河口の急流</li>
                              <li>• 砂に足を取られる</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-600 mb-2">✅ 対策</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 水深の事前確認</li>
                              <li>• 波打ち際での注意</li>
                              <li>• 河口の流れ把握</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 天候別 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">天候別注意点</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-gray-50 to-slate-100 p-6 rounded-xl shadow-md border-l-4 border-gray-500">
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <span className="text-3xl mr-3">🌪️</span>
                          強風・悪天候
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-700 mb-2">風速の目安</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 5m/s未満：安全</li>
                              <li>• 5-10m/s：注意</li>
                              <li>• 10m/s以上：危険</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-semibold text-red-600 mb-2">⛈️ 雷雨時の対応</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 即座に釣りを中止</li>
                              <li>• 竿を地面に置く</li>
                              <li>• 車内や建物に避難</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                        <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                          <span className="text-3xl mr-3">🌡️</span>
                          季節別注意点
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-semibold text-green-600 mb-2">🌸 春・秋</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 低気圧による急変</li>
                              <li>• 寒暖差への対応</li>
                              <li>• 台風シーズン注意</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h5 className="font-semibold text-blue-600 mb-2">☀️ 夏・冬</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 夏：熱中症・突然の雷雨</li>
                              <li>• 冬：低体温症・高波</li>
                              <li>• 水分補給・防寒対策</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 緊急時対応 */}
            {activeTab === 'emergency' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚨 緊急時対応</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                      <span className="text-2xl mr-2">🚨</span>
                      海中転落時の対応
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">🏊 落水者がすべきこと</h4>
                        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                          <li>慌てずに浮力を確保</li>
                          <li>ライフジャケットを信頼</li>
                          <li>体力を温存する</li>
                          <li>大声で助けを求める</li>
                          <li>流されても岸に向かわない</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">🆘 目撃者がすべきこと</h4>
                        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                          <li>118番通報</li>
                          <li>浮く物を投げる</li>
                          <li>自分は海に入らない</li>
                          <li>落水者を見失わない</li>
                          <li>救助隊の誘導</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                      <span className="text-2xl mr-2">📞</span>
                      緊急連絡先
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-red-600">118</div>
                        <div className="text-sm text-gray-600">海上保安庁</div>
                        <div className="text-xs text-gray-500">海難事故専用</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-red-600">119</div>
                        <div className="text-sm text-gray-600">消防署</div>
                        <div className="text-xs text-gray-500">救急・火災</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">110</div>
                        <div className="text-sm text-gray-600">警察</div>
                        <div className="text-xs text-gray-500">一般事故</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                      <span className="text-2xl mr-2">🩹</span>
                      応急処置の基本
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">🩸 出血時</h4>
                        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                          <li>清潔な布で傷口を圧迫</li>
                          <li>患部を心臓より高く上げる</li>
                          <li>圧迫点を押さえる</li>
                          <li>ショック状態に注意</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">🥶 低体温症</h4>
                        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                          <li>濡れた衣服を脱がせる</li>
                          <li>乾いた毛布で包む</li>
                          <li>温かい場所に移動</li>
                          <li>温かい飲み物を与える</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 安全チェックリスト */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              安全釣行チェックリスト
            </h2>
            <p className="text-gray-600">出発前に必ずチェック！安全な釣りのための5つのポイント</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                number: '1', 
                title: '天候チェック', 
                content: '気象・海況情報を確認'
              },
              { 
                number: '2', 
                title: '装備確認', 
                content: 'ライフジャケットは必須'
              },
              { 
                number: '3', 
                title: '場所選択', 
                content: '安全な釣り場を選ぶ'
              },
              { 
                number: '4', 
                title: '連絡確保', 
                content: '行き先・帰宅予定を報告'
              },
              { 
                number: '5', 
                title: '緊急対応', 
                content: '118番をすぐに通報'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="p-6 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gray-800 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                      {item.number}
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full">
              <span className="font-medium">全てチェックできたら、安全な釣りの準備完了です</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
