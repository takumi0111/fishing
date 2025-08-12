'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import '@/styles/home.css';

interface FormData {
  area: string;
  fish: string;
  customFish: string;
  startDate: string;
}

export default function Home(): React.JSX.Element {
  const [area, setArea] = useState<string>('');
  const [fish, setFish] = useState<string>('');
  const [customFish, setCustomFish] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // URLパラメータから初期値を設定
  useEffect(() => {
    const areaParam = searchParams.get('area');
    const fishParam = searchParams.get('fish');
    if (areaParam) setArea(areaParam);
    if (fishParam) setFish(fishParam);
  }, [searchParams]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSearching(true);

    try {
      // 魚種の値を決定（その他の場合はカスタム入力を使用）
      const fishValue = fish === 'other' ? customFish : fish;
      
      // カスタム魚種の場合、入力チェック
      if (fish === 'other' && !customFish.trim()) {
        alert('魚種を入力してください。');
        setIsSearching(false);
        return;
      }

      // 検索パラメータを構築
      const searchParams = new URLSearchParams();
      if (area) searchParams.append('area', area);
      if (fishValue) searchParams.append('fish', fishValue);
      if (startDate) searchParams.append('startDate', startDate);

      // 検索結果ページに遷移
      router.push(`/search?${searchParams.toString()}`);
    } catch (error) {
      console.error('Search error:', error);
      alert('検索中にエラーが発生しました。');
    } finally {
      setIsSearching(false);
    }
  };

  const handleFishChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setFish(value);
    if (value !== 'other') {
      setCustomFish('');
    }
  };

  return (
    <div className="page-container">
      {/* ヘッダー */}
      <header className="home-header">
        <div className="home-header-container">
          <h1 className="home-title">
            🎣 海釣りガイド　
            <span className="home-subtitle">初心者向け</span>
          </h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="home-main">
        {/* ウェルカムメッセージ */}
        <div className="home-welcome">
          <h2 className="home-welcome-title">
            初心者でも安心！海釣りを始めよう
          </h2>
          <p className="home-welcome-description">
            あなたにピッタリの釣りスポットと道具をご提案します。
            安全で楽しい海釣り体験をサポートします。
          </p>
        </div>

        {/* 検索フォーム */}
        <div className="search-form-container">
          <h3 className="search-form-title">
            釣りスポットを探す
          </h3>
          
          <form onSubmit={handleSearch}>
            <div className="search-form-grid">
              {/* エリア選択 */}
              <div className="form-group">
                <label className="form-label">
                  エリア
                </label>
                <select 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="form-select"
                >
                  <option value="">エリアを選択</option>
                  <optgroup label="北海道・東北">
                    <option value="hokkaido">北海道</option>
                    <option value="tohoku">東北地方全域</option>
                    <option value="aomori">青森県</option>
                    <option value="miyagi">宮城県</option>
                    <option value="fukushima">福島県</option>
                  </optgroup>
                  <optgroup label="関東">
                    <option value="tokyo">東京湾</option>
                    <option value="kanagawa">神奈川県</option>
                    <option value="chiba">千葉県</option>
                    <option value="ibaraki">茨城県</option>
                    <option value="kanto">関東地方全域</option>
                  </optgroup>
                  <optgroup label="東海・中部">
                    <option value="aichi">愛知県</option>
                    <option value="shizuoka">静岡県</option>
                    <option value="mie">三重県</option>
                    <option value="tokai">東海地方全域</option>
                    <option value="niigata">新潟県</option>
                    <option value="ishikawa">石川県</option>
                  </optgroup>
                  <optgroup label="関西">
                    <option value="osaka">大阪湾</option>
                    <option value="hyogo">兵庫県</option>
                    <option value="wakayama">和歌山県</option>
                    <option value="kansai">関西地方全域</option>
                  </optgroup>
                  <optgroup label="中国・四国">
                    <option value="hiroshima">広島県</option>
                    <option value="okayama">岡山県</option>
                    <option value="kagawa">香川県</option>
                    <option value="ehime">愛媛県</option>
                    <option value="chugoku-shikoku">中国・四国全域</option>
                  </optgroup>
                  <optgroup label="九州・沖縄">
                    <option value="fukuoka">福岡県</option>
                    <option value="kumamoto">熊本県</option>
                    <option value="kagoshima">鹿児島県</option>
                    <option value="okinawa">沖縄県</option>
                    <option value="kyushu">九州・沖縄全域</option>
                  </optgroup>
                </select>
              </div>

              {/* 釣りたい魚 */}
              <div className="form-group">
                <label className="form-label">
                  釣りたい魚
                </label>
                <select 
                  value={fish}
                  onChange={handleFishChange}
                  className="form-select"
                >
                  <option value="">魚種を選択</option>
                  <option value="aji">アジ</option>
                  <option value="saba">サバ</option>
                  <option value="iwashi">イワシ</option>
                  <option value="mebaru">メバル</option>
                  <option value="kasago">カサゴ</option>
                  <option value="kisu">キス</option>
                  <option value="tai">マダイ</option>
                  <option value="suzuki">スズキ</option>
                  <option value="aorika">アオリイカ</option>
                  <option value="hirame">ヒラメ</option>
                  <option value="other">その他（自由入力）</option>
                </select>
                
                {fish === 'other' && (
                  <div className="custom-fish-input">
                    <input
                      type="text"
                      value={customFish}
                      onChange={(e) => setCustomFish(e.target.value)}
                      placeholder="釣りたい魚種を入力してください（例：ブリ、タコ、カンパチなど）"
                      className="form-input"
                    />
                  </div>
                )}
              </div>

              {/* 釣行予定日 */}
              <div className="form-group">
                <label className="form-label">
                  釣行予定日
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSearching}
              className="search-button"
            >
              {isSearching ? '検索中...' : '釣りスポットを検索'}
            </button>
          </form>
        </div>

        {/* 機能紹介カード */}
        <div className="feature-cards-grid">
          <div className="feature-card">
            <div className="feature-card-icon">🌊</div>
            <h3 className="feature-card-title">釣り豆知識</h3>
            <p className="feature-card-description">
              天候・潮汐・釣り用語など初心者向けの基礎知識
            </p>
            <Link 
              href="/fishing-tips"
              className="feature-card-button feature-card-button-tips"
            >
              詳しく見る
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon">🐟</div>
            <h3 className="feature-card-title">魚の情報</h3>
            <p className="feature-card-description">
              魚種別の特徴や釣り方を詳しく解説
            </p>
            <Link 
              href="/fish-info"
              className="feature-card-button feature-card-button-fish"
            >
              詳しく見る
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon">🛡️</div>
            <h3 className="feature-card-title">安全ガイド</h3>
            <p className="feature-card-description">
              安全な釣りのためのルールとマナーをご紹介
            </p>
            <Link 
              href="/safety-guide"
              className="feature-card-button feature-card-button-safety"
            >
              詳しく見る
            </Link>
          </div>
        </div>

        {/* 初心者のための基本情報 */}
        <div className="beginner-info-container">
          <h2 className="beginner-info-title">
            初心者のための基本情報
          </h2>
          
          <div className="beginner-info-grid">
            {/* 今の季節におすすめ */}
            <div className="beginner-info-card">
              <h3 className="beginner-info-card-title beginner-info-card-title-blue">
                <span className="beginner-info-card-icon">🌊</span>
                今の季節におすすめ
              </h3>
              <ul className="beginner-info-list">
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-blue">•</span>
                  <div>
                    <span className="beginner-info-item-title">アジ</span>
                    <span className="beginner-info-item-description">サビキ釣りで初心者でも簡単</span>
                  </div>
                </li>
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-blue">•</span>
                  <div>
                    <span className="beginner-info-item-title">イワシ</span>
                    <span className="beginner-info-item-description">群れで釣れるので数釣りが楽しめる</span>
                  </div>
                </li>
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-blue">•</span>
                  <div>
                    <span className="beginner-info-item-title">サバ</span>
                    <span className="beginner-info-item-description">引きが強く釣りごたえ抜群</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 基本の持ち物 */}
            <div className="beginner-info-card">
              <h3 className="beginner-info-card-title beginner-info-card-title-green">
                <span className="beginner-info-card-icon">🎒</span>
                基本の持ち物
              </h3>
              <ul className="beginner-info-list">
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-green">•</span>
                  <span>
                    <span className="beginner-info-item-safety">ライフジャケット</span>
                    <span className="beginner-info-item-safety-description">（安全のため必須）</span>
                  </span>
                </li>
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-green">•</span>
                  <span className="beginner-info-item-title">竿・リール・仕掛け</span>
                </li>
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-green">•</span>
                  <span className="beginner-info-item-title">クーラーボックス・氷</span>
                </li>
                <li className="beginner-info-list-item">
                  <span className="beginner-info-list-bullet beginner-info-list-bullet-green">•</span>
                  <span className="beginner-info-item-title">タオル・帽子・日焼け止め</span>
                </li>
              </ul>
            </div>

            {/* AI による情報提供 */}
            <div className="beginner-info-card">
              <h3 className="beginner-info-card-title beginner-info-card-title-purple">
                <span className="beginner-info-card-icon">🤖</span>
                AI による情報提供
              </h3>
              <p className="beginner-info-ai-description">
                検索結果はGemini AIが各種釣り情報サイト、自治体の観光情報、釣り場ガイドなどを参考に生成します。
                情報源と最終更新年も併せて表示し、透明性を確保しています。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
