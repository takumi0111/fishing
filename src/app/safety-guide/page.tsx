'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '@/styles/safety-guide.css';

type TabType = 'basic' | 'location' | 'emergency';

interface ChecklistItem {
  number: string;
  title: string;
  content: string;
}

export default function SafetyGuide(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('basic');

  const checklistItems: ChecklistItem[] = [
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
  ];

  return (
    <div className="safety-guide-container">
      {/* ヘッダー */}
      <header className="safety-header">
        <div className="safety-header-container">
          <h1 className="safety-title">
            🛡️ 海釣り安全ガイド
          </h1>
          <p className="safety-subtitle">
            安全な釣りのための重要な知識とルール
          </p>
        </div>
      </header>

      <main className="safety-main">
        {/* 戻るボタン */}
        <div>
          <Link 
            href="/"
            className="back-button"
          >
            ← ホームに戻る
          </Link>
        </div>

        {/* 緊急時連絡先 */}
        <div className="emergency-alert">
          <div className="emergency-alert-content">
            <div className="emergency-alert-icon">🚨</div>
            <div>
              <h3 className="emergency-alert-title">緊急時連絡先</h3>
              <p className="emergency-alert-text">
                海での事故・遭難時：<strong className="emergency-number">118番</strong>（海上保安庁）
              </p>
            </div>
          </div>
        </div>

        {/* タブナビゲーション */}
        <div className="tab-container">
          <div className="tab-nav">
            <button
              onClick={() => setActiveTab('basic')}
              className={`tab-button ${activeTab === 'basic' ? 'active' : ''}`}
            >
              📋 基本・装備
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`tab-button ${activeTab === 'location' ? 'active' : ''}`}
            >
              📍 場所・天候別注意点
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`tab-button ${activeTab === 'emergency' ? 'active' : ''}`}
            >
              🚨 緊急時対応
            </button>
          </div>

          <div className="tab-content">
            {/* 基本的注意事項 */}
            {activeTab === 'basic' && (
              <div>
                <h2 className="tab-title">📋 基本的注意事項と装備</h2>
                
                <div className="content-grid-2">
                  <div className="safety-card safety-card-blue">
                    <h3 className="safety-card-title safety-card-title-blue">
                      <span className="safety-card-icon">🌊</span>
                      出発前の準備
                    </h3>
                    <ul className="safety-list">
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">天気予報・海況の確認</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text safety-list-text-safety">ライフジャケットの着用（必須）</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">釣行計画の家族への連絡</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">携帯電話の充電確認</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">応急処置用品の携帯</span>
                      </li>
                    </ul>
                  </div>

                  <div className="safety-card safety-card-green">
                    <h3 className="safety-card-title safety-card-title-green">
                      <span className="safety-card-icon">⚡</span>
                      釣り場での基本ルール
                    </h3>
                    <ul className="safety-list">
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">単独釣行は避ける</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">滑りやすい場所は避ける</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">波の状況を常に確認</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">無理な移動はしない</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">暗くなる前に帰る</span>
                      </li>
                    </ul>
                  </div>

                  <div className="safety-card safety-card-yellow">
                    <h3 className="safety-card-title safety-card-title-yellow">
                      <span className="safety-card-icon">🎣</span>
                      必携装備
                    </h3>
                    <ul className="safety-list">
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text safety-list-text-safety">ライフジャケット（必須）</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">滑り止めシューズ</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">ヘッドライト・懐中電灯</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">防寒・防水着</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">救急セット</span>
                      </li>
                    </ul>
                  </div>

                  <div className="safety-card safety-card-purple">
                    <h3 className="safety-card-title safety-card-title-purple">
                      <span className="safety-card-icon">📱</span>
                      連絡手段の確保
                    </h3>
                    <ul className="safety-list">
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">携帯電話の防水対策</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">予備バッテリーの携帯</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">緊急連絡先の確認</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">位置情報の共有設定</span>
                      </li>
                      <li className="safety-list-item">
                        <span className="safety-list-bullet">•</span>
                        <span className="safety-list-text">帰宅予定時刻の連絡</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 場所・天候別注意点 */}
            {activeTab === 'location' && (
              <div>
                <h2 className="tab-title">📍 場所・天候別注意点</h2>
                
                <div className="space-y-8">
                  {/* 場所別 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">場所別注意点</h3>
                    <div className="content-grid-3">
                      <div className="safety-card-blue">
                        <h4 className="safety-card-title safety-card-title-blue">
                          <span className="safety-card-icon">🏔️</span>
                          磯場・岩場
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="sub-card-title sub-card-title-red">⚠️ 危険要因</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 高波による転落</li>
                              <li className="sub-card-list-item">• 滑りやすい岩場</li>
                              <li className="sub-card-list-item">• 満潮時の孤立</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="sub-card-title sub-card-title-green">✅ 対策</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 潮汐表の事前確認</li>
                              <li className="sub-card-list-item">• スパイクシューズ着用</li>
                              <li className="sub-card-list-item">• 逃げ道の確保</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="safety-card-green">
                        <h4 className="safety-card-title safety-card-title-green">
                          <span className="safety-card-icon">🌊</span>
                          防波堤・岸壁
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="sub-card-title sub-card-title-red">⚠️ 危険要因</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 夜間の転落事故</li>
                              <li className="sub-card-list-item">• 高所からの落下</li>
                              <li className="sub-card-list-item">• 強風時の不安定</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="sub-card-title sub-card-title-green">✅ 対策</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 柵のある場所選択</li>
                              <li className="sub-card-list-item">• 十分な照明確保</li>
                              <li className="sub-card-list-item">• 滑り止め靴着用</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="safety-card-yellow">
                        <h4 className="safety-card-title safety-card-title-yellow">
                          <span className="safety-card-icon">🏖️</span>
                          砂浜・河口
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="sub-card-title sub-card-title-red">⚠️ 危険要因</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 急な深み・離岸流</li>
                              <li className="sub-card-list-item">• 河口の急流</li>
                              <li className="sub-card-list-item">• 砂に足を取られる</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="sub-card-title sub-card-title-green">✅ 対策</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 水深の事前確認</li>
                              <li className="sub-card-list-item">• 波打ち際での注意</li>
                              <li className="sub-card-list-item">• 河口の流れ把握</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 天候別 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">天候別注意点</h3>
                    <div className="content-grid-2">
                      <div className="safety-card safety-card-gray">
                        <h4 className="safety-card-title safety-card-title-gray">
                          <span className="safety-card-icon">🌪️</span>
                          強風・悪天候
                        </h4>
                        <div className="space-y-3">
                          <div className="sub-card">
                            <h5 className="sub-card-title sub-card-title-gray">風速の目安</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 5m/s未満：安全</li>
                              <li className="sub-card-list-item">• 5-10m/s：注意</li>
                              <li className="sub-card-list-item">• 10m/s以上：危険</li>
                            </ul>
                          </div>
                          <div className="sub-card">
                            <h5 className="sub-card-title sub-card-title-red">⛈️ 雷雨時の対応</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 即座に釣りを中止</li>
                              <li className="sub-card-list-item">• 竿を地面に置く</li>
                              <li className="sub-card-list-item">• 車内や建物に避難</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="safety-card safety-card-orange">
                        <h4 className="safety-card-title safety-card-title-orange">
                          <span className="safety-card-icon">🌡️</span>
                          季節別注意点
                        </h4>
                        <div className="space-y-3">
                          <div className="sub-card">
                            <h5 className="sub-card-title sub-card-title-green">🌸 春・秋</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 低気圧による急変</li>
                              <li className="sub-card-list-item">• 寒暖差への対応</li>
                              <li className="sub-card-list-item">• 台風シーズン注意</li>
                            </ul>
                          </div>
                          <div className="sub-card">
                            <h5 className="sub-card-title sub-card-title-blue">☀️ 夏・冬</h5>
                            <ul className="sub-card-list">
                              <li className="sub-card-list-item">• 夏：熱中症・突然の雷雨</li>
                              <li className="sub-card-list-item">• 冬：低体温症・高波</li>
                              <li className="sub-card-list-item">• 水分補給・防寒対策</li>
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
                <h2 className="tab-title">🚨 緊急時対応</h2>
                
                <div className="space-y-6">
                  <div className="safety-card-red">
                    <h3 className="safety-card-title safety-card-title-red">
                      <span className="safety-card-icon">🚨</span>
                      海中転落時の対応
                    </h3>
                    <div className="content-grid-2">
                      <div>
                        <h4 className="sub-card-title sub-card-title-red">🏊 落水者がすべきこと</h4>
                        <ol className="sub-card-list">
                          <li className="sub-card-list-item">1. 慌てずに浮力を確保</li>
                          <li className="sub-card-list-item">2. ライフジャケットを信頼</li>
                          <li className="sub-card-list-item">3. 体力を温存する</li>
                          <li className="sub-card-list-item">4. 大声で助けを求める</li>
                          <li className="sub-card-list-item">5. 流されても岸に向かわない</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="sub-card-title sub-card-title-red">🆘 目撃者がすべきこと</h4>
                        <ol className="sub-card-list">
                          <li className="sub-card-list-item">1. 118番通報</li>
                          <li className="sub-card-list-item">2. 浮く物を投げる</li>
                          <li className="sub-card-list-item">3. 自分は海に入らない</li>
                          <li className="sub-card-list-item">4. 落水者を見失わない</li>
                          <li className="sub-card-list-item">5. 救助隊の誘導</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="safety-card-orange">
                    <h3 className="safety-card-title safety-card-title-orange">
                      <span className="safety-card-icon">📞</span>
                      緊急連絡先
                    </h3>
                    <div className="emergency-contacts">
                      <div className="emergency-contact-card">
                        <div className="emergency-contact-number emergency-contact-number-red">118</div>
                        <div className="emergency-contact-title">海上保安庁</div>
                        <div className="emergency-contact-description">海難事故専用</div>
                      </div>
                      <div className="emergency-contact-card">
                        <div className="emergency-contact-number emergency-contact-number-red">119</div>
                        <div className="emergency-contact-title">消防署</div>
                        <div className="emergency-contact-description">救急・火災</div>
                      </div>
                      <div className="emergency-contact-card">
                        <div className="emergency-contact-number emergency-contact-number-blue">110</div>
                        <div className="emergency-contact-title">警察</div>
                        <div className="emergency-contact-description">一般事故</div>
                      </div>
                    </div>
                  </div>

                  <div className="safety-card-green">
                    <h3 className="safety-card-title safety-card-title-green">
                      <span className="safety-card-icon">🩹</span>
                      応急処置の基本
                    </h3>
                    <div className="content-grid-2">
                      <div>
                        <h4 className="sub-card-title sub-card-title-green">🩸 出血時</h4>
                        <ol className="sub-card-list">
                          <li className="sub-card-list-item">1. 清潔な布で傷口を圧迫</li>
                          <li className="sub-card-list-item">2. 患部を心臓より高く上げる</li>
                          <li className="sub-card-list-item">3. 圧迫点を押さえる</li>
                          <li className="sub-card-list-item">4. ショック状態に注意</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="sub-card-title sub-card-title-green">🥶 低体温症</h4>
                        <ol className="sub-card-list">
                          <li className="sub-card-list-item">1. 濡れた衣服を脱がせる</li>
                          <li className="sub-card-list-item">2. 乾いた毛布で包む</li>
                          <li className="sub-card-list-item">3. 温かい場所に移動</li>
                          <li className="sub-card-list-item">4. 温かい飲み物を与える</li>
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
        <div className="checklist-container">
          <div className="checklist-header">
            <h2 className="checklist-title">
              安全釣行チェックリスト
            </h2>
            <p className="checklist-subtitle">出発前に必ずチェック！安全な釣りのための5つのポイント</p>
          </div>
          
          <div className="checklist-grid">
            {checklistItems.map((item, index) => (
              <div key={index} className="checklist-item">
                <div className="checklist-item-header">
                  <div className="checklist-item-number">
                    {item.number}
                  </div>
                  <h3 className="checklist-item-title">{item.title}</h3>
                </div>
                <p className="checklist-item-content">{item.content}</p>
              </div>
            ))}
          </div>
          
          <div className="checklist-footer">
            <div className="checklist-completion">
              <span className="checklist-completion-text">全てチェックできたら、安全な釣りの準備完了です</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
