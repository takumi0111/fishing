'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/fishing-tips.css';

export default function FishingTips(): React.JSX.Element {
  return (
    <div className="fishing-tips-container">
      {/* ヘッダー */}
      <header className="tips-header">
        <div className="tips-header-container">
          <h1 className="tips-title">
            🎯 釣り豆知識
          </h1>
          <p className="tips-subtitle">
            初心者のための天候・潮汐・釣り用語ガイド
          </p>
        </div>
      </header>

      <main className="tips-main">
        {/* 戻るボタン */}
        <div>
          <Link 
            href="/"
            className="back-button"
          >
            ← ホームに戻る
          </Link>
        </div>

        {/* 目次 */}
        <div className="tips-toc-container">
          <h2 className="tips-toc-title">📋 目次</h2>
          <div className="tips-toc-grid">
            <a href="#weather-tides" className="tips-toc-item">
              <span className="tips-toc-icon">🌊</span>
              <span>天候・潮汐の基礎</span>
            </a>
            <a href="#fishing-terms" className="tips-toc-item">
              <span className="tips-toc-icon">🎣</span>
              <span>釣り用語解説</span>
            </a>
            <a href="#tackle-guide" className="tips-toc-item">
              <span className="tips-toc-icon">🎯</span>
              <span>道具の基礎知識</span>
            </a>

          </div>
        </div>

        {/* 天候・潮汐セクション */}
        <section id="weather-tides" className="tips-section">
          <h2 className="tips-section-title">
            🌊 天候・潮汐の基礎知識
          </h2>
          
          <div className="tips-cards-grid">
            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🌅</span>
                <h3 className="tips-card-title">朝マズメ・夕マズメ</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  <strong>朝マズメ</strong>：日の出前後の薄明かりの時間帯（5:00〜7:00頃）<br/>
                  <strong>夕マズメ</strong>：日没前後の薄明かりの時間帯（17:00〜19:00頃）
                </p>
                <div className="tips-card-details">
                  <p><strong>なぜ重要？</strong></p>
                  <ul>
                    <li>魚の活性が最も高くなる時間帯</li>
                    <li>小魚が活発に動き、大型魚も捕食のため浅場に出てくる</li>
                    <li>釣り人にとって「ゴールデンタイム」と呼ばれる</li>
                    <li>光の変化で魚の警戒心が低下する</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🌊</span>
                <h3 className="tips-card-title">潮の満ち引き</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  月の引力により海水位が変化すること。魚の活性に大きく影響する自然現象
                </p>
                <div className="tips-card-details">
                  <p><strong>釣りへの影響</strong></p>
                  <ul>
                    <li><strong>上げ潮</strong>：潮が満ちてくる時間（魚の活性アップ）</li>
                    <li><strong>下げ潮</strong>：潮が引いていく時間（魚の活性アップ）</li>
                    <li><strong>潮止まり</strong>：潮の動きが止まる時間（活性ダウン）</li>
                    <li>潮の動く時間帯を狙うのが基本</li>
                    <li>大潮・中潮・小潮・長潮のサイクルも重要</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">☀️</span>
                <h3 className="tips-card-title">天候と釣果の関係</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  天気や気圧の変化は魚の行動パターンに大きく影響します
                </p>
                <div className="tips-card-details">
                  <p><strong>天候別の特徴</strong></p>
                  <ul>
                    <li><strong>晴天</strong>：魚が深場に移動しやすい、朝夕がチャンス</li>
                    <li><strong>曇天</strong>：一日中魚の活性が高い、初心者におすすめ</li>
                    <li><strong>雨前</strong>：低気圧で魚の活性アップ、大型が期待できる</li>
                    <li><strong>雨後</strong>：水の濁りで釣果ダウン、回復まで待つ</li>
                    <li><strong>強風時</strong>：安全を優先、釣行は控える</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🌡️</span>
                <h3 className="tips-card-title">水温と季節</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  水温の変化により、釣れる魚種や釣れる場所が大きく変わります
                </p>
                <div className="tips-card-details">
                  <p><strong>季節別の特徴</strong></p>
                  <ul>
                    <li><strong>春</strong>：産卵期、浅場に魚が集まる</li>
                    <li><strong>夏</strong>：高水温で深場へ、早朝夕方がメイン</li>
                    <li><strong>秋</strong>：荒食いシーズン、大型が期待できる</li>
                    <li><strong>冬</strong>：低活性、深場でじっくり狙う</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 釣り用語セクション */}
        <section id="fishing-terms" className="tips-section">
          <h2 className="tips-section-title">
            🎣 釣り用語解説
          </h2>
          
          <div className="tips-cards-grid">
            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🎣</span>
                <h3 className="tips-card-title">サビキ釣り</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  複数の小さな針が付いた仕掛けで、コマセ（撒き餌）と組み合わせて魚を釣る方法
                </p>
                <div className="tips-card-details">
                  <p><strong>特徴とコツ</strong></p>
                  <ul>
                    <li>初心者でも簡単にできる</li>
                    <li>アジ、サバ、イワシなどの小型回遊魚によく効く</li>
                    <li>一度に複数匹釣れることがある</li>
                    <li>餌を付ける必要がない（疑似餌付きの針を使用）</li>
                    <li>コマセカゴを使って魚を集める</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🐟</span>
                <h3 className="tips-card-title">コマセ</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  魚を集めるために海に撒く餌のこと。アミエビ、オキアミ、配合餌などを使用
                </p>
                <div className="tips-card-details">
                  <p><strong>効果とコツ</strong></p>
                  <ul>
                    <li>魚を釣り場に集める効果がある</li>
                    <li>少しずつ継続して撒くのがポイント</li>
                    <li>風向きや潮の流れを考えて撒く場所を決める</li>
                    <li>サビキ釣りやウキ釣りでよく使用される</li>
                    <li>撒きすぎると魚が満腹になって釣れなくなる</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🎯</span>
                <h3 className="tips-card-title">ジグ・ジギング</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  金属製のルアー（ジグ）を使い、竿をしゃくって動きを付ける釣り方
                </p>
                <div className="tips-card-details">
                  <p><strong>使い方とコツ</strong></p>
                  <ul>
                    <li>投げた後、竿をしゃくって動きを付ける</li>
                    <li>青物（ブリ、ハマチ、サワラなど）によく効く</li>
                    <li>底から表層まで幅広い層を探れる</li>
                    <li>重さや色を変えて使い分ける</li>
                    <li>ショアジギング（岸から）と船ジギングがある</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🦑</span>
                <h3 className="tips-card-title">エギング</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  エビに似せたルアー「エギ」を使ってアオリイカなどを狙う専門的な釣り方
                </p>
                <div className="tips-card-details">
                  <p><strong>エギングの特徴</strong></p>
                  <ul>
                    <li>竿を上下に動かす「しゃくり」アクションが重要</li>
                    <li>春（親イカ）と秋（新イカ）がベストシーズン</li>
                    <li>藻場や岩礁帯周辺が好ポイント</li>
                    <li>エギの色やサイズを使い分ける</li>
                    <li>イカの習性を理解することが重要</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🎣</span>
                <h3 className="tips-card-title">ウキフカセ釣り</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  ウキを使って仕掛けを潮の流れに乗せ、自然にエサを流す高度な釣り方
                </p>
                <div className="tips-card-details">
                  <p><strong>特徴とコツ</strong></p>
                  <ul>
                    <li>メジナ（グレ）、クロダイなどの磯魚によく効く</li>
                    <li>コマセワークが非常に重要</li>
                    <li>潮の流れを読む技術が必要</li>
                    <li>繊細な仕掛けと集中力が求められる</li>
                    <li>上級者向けの釣り方</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🎯</span>
                <h3 className="tips-card-title">投げ釣り</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  重いオモリを付けた仕掛けを遠くに投げて、底にいる魚を狙う釣り方
                </p>
                <div className="tips-card-details">
                  <p><strong>特徴とコツ</strong></p>
                  <ul>
                    <li>キス、カレイ、ハゼなどの底魚がターゲット</li>
                    <li>砂地のサーフや堤防から楽しめる</li>
                    <li>遠投技術が釣果に直結</li>
                    <li>底を這わせるような誘いが効果的</li>
                    <li>初心者でも始めやすい釣り方</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 道具の基礎知識セクション */}
        <section id="tackle-guide" className="tips-section">
          <h2 className="tips-section-title">
            🎯 道具の基礎知識
          </h2>
          
          <div className="tips-cards-grid">
            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🎣</span>
                <h3 className="tips-card-title">竿（ロッド）の基礎</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  釣りの基本となる道具。用途に応じて様々な種類がある
                </p>
                <div className="tips-card-details">
                  <p><strong>主な種類</strong></p>
                  <ul>
                    <li><strong>万能竿</strong>：初心者におすすめ、様々な釣りに対応</li>
                    <li><strong>投げ竿</strong>：遠投用、硬めで長い</li>
                    <li><strong>ルアーロッド</strong>：ルアー釣り専用、感度重視</li>
                    <li><strong>磯竿</strong>：ウキ釣り用、しなやかで軽い</li>
                    <li>長さは釣り場と魚種に応じて選ぶ</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">⚙️</span>
                <h3 className="tips-card-title">リールの基礎</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  糸を巻く道具。スピニングリールとベイトリールが主流
                </p>
                <div className="tips-card-details">
                  <p><strong>主な種類</strong></p>
                  <ul>
                    <li><strong>スピニングリール</strong>：初心者向け、扱いやすい</li>
                    <li><strong>ベイトリール</strong>：上級者向け、パワーがある</li>
                    <li><strong>両軸リール</strong>：船釣り用、巻き上げ力が強い</li>
                    <li>番手（サイズ）は魚種に応じて選ぶ</li>
                    <li>定期的なメンテナンスが重要</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🧵</span>
                <h3 className="tips-card-title">釣り糸（ライン）の基礎</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  竿とハリを繋ぐ重要な部分。材質や太さで特性が大きく変わる
                </p>
                <div className="tips-card-details">
                  <p><strong>主な種類</strong></p>
                  <ul>
                    <li><strong>ナイロン</strong>：初心者向け、安価で扱いやすい</li>
                    <li><strong>フロロカーボン</strong>：水中で見えにくい、根ズレに強い</li>
                    <li><strong>PE</strong>：強度抜群、感度が良い、上級者向け</li>
                    <li>太さ（号数）は魚の大きさに応じて選ぶ</li>
                    <li>定期的な交換が必要</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tips-card">
              <div className="tips-card-header">
                <span className="tips-card-icon">🪝</span>
                <h3 className="tips-card-title">ハリ・仕掛けの基礎</h3>
              </div>
              <div className="tips-card-content">
                <p className="tips-card-description">
                  魚の口に掛ける部分。魚種や釣り方に応じて適切なものを選ぶ
                </p>
                <div className="tips-card-details">
                  <p><strong>選び方のポイント</strong></p>
                  <ul>
                    <li>魚の口の大きさに合わせてハリのサイズを選ぶ</li>
                    <li>小さな魚には小さなハリ、大きな魚には大きなハリ</li>
                    <li>餌に応じてハリの形状を選ぶ</li>
                    <li>初心者は市販の仕掛けから始める</li>
                    <li>予備のハリは必ず持参する</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
