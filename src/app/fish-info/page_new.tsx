'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { fishSpecies, seasons, difficultyLevels, FishSpecies } from '@/data/fishData';
import Image from 'next/image';
import '@/styles/fish-info.css';

export default function FishInfo(): React.JSX.Element {
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // 季節キーを日本語に変換するマッピング
  const seasonMapping = {
    spring: '春',
    summer: '夏', 
    autumn: '秋',
    winter: '冬'
  };

  // フィルタリングされた魚データ
  const filteredFish = fishSpecies.filter(fish => {
    const seasonMatch = selectedSeason === 'all' || fish.season.some(s => seasonMapping[s] === selectedSeason);
    const difficultyMatch = selectedDifficulty === 'all' || fish.difficulty === selectedDifficulty;
    return seasonMatch && difficultyMatch;
  });

  const getSeasonClass = (season: string) => {
    switch (season) {
      case '春': return 'season-spring';
      case '夏': return 'season-summer';
      case '秋': return 'season-autumn';
      case '冬': return 'season-winter';
      default: return '';
    }
  };

  return (
    <div className="fish-info-container">
      {/* ヘッダー */}
      <header className="fish-header">
        <div className="fish-header-container">
          <h1 className="fish-title">
            🐟 魚種図鑑
          </h1>
          <p className="fish-subtitle">
            初心者向けの魚種情報と釣り方ガイド
          </p>
        </div>
      </header>

      <main className="fish-main">
        {/* 戻るボタン */}
        <div>
          <Link 
            href="/"
            className="back-button"
          >
            ← ホームに戻る
          </Link>
        </div>

        {/* フィルター */}
        <div className="filter-container">
          <h3 className="filter-title">
            魚種を絞り込む
          </h3>
          
          <div className="filter-grid">
            <div className="filter-group">
              <label className="filter-label">
                季節で絞り込み
              </label>
              <select 
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="filter-select"
              >
                <option value="all">すべての季節</option>
                <option value="春">春</option>
                <option value="夏">夏</option>
                <option value="秋">秋</option>
                <option value="冬">冬</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                難易度で絞り込み
              </label>
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="filter-select"
              >
                <option value="all">すべての難易度</option>
                <option value="beginner">初心者</option>
                <option value="intermediate">中級者</option>
                <option value="advanced">上級者</option>
              </select>
            </div>
          </div>
        </div>

        {/* 魚種グリッド */}
        <div className="fish-grid">
          {filteredFish.map((fish) => (
            <div key={fish.id} className="fish-card">
              <div className="fish-card-header">
                <div className="fish-card-icon">
                  {fish.image ? (
                    <Image
                      src={`/${fish.image}`}
                      alt={fish.name}
                      width={60}
                      height={60}
                      className="fish-image"
                      style={{ borderRadius: '8px', objectFit: 'cover' }}
                    />
                  ) : (
                    '🐟'
                  )}
                </div>
                <h3 className="fish-card-name">{fish.name}</h3>
                <p className="fish-card-size">サイズ: {fish.averageSize}</p>
              </div>

              <div className="fish-card-body">
                <div className="fish-card-difficulty">
                  <span className="fish-card-difficulty-label">難易度:</span>
                  <div className="difficulty-badge">
                    <span className={`difficulty-${fish.difficulty}`}>
                      {difficultyLevels[fish.difficulty].name}
                    </span>
                  </div>
                </div>

                <div className="fish-card-info">
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">季節:</span>
                    <div className="seasons-container">
                      {fish.season.map((season, index) => (
                        <span key={index} className={`season-tag season-${season}`}>
                          {seasonMapping[season]}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">時間:</span>
                    <span className="fish-card-info-value">
                      {fish.bestTime.map(time => {
                        const timeNames = {
                          dawn: '夜明け',
                          morning: '朝',
                          afternoon: '午後',
                          evening: '夕方',
                          night: '夜'
                        };
                        return timeNames[time];
                      }).join('・')}
                    </span>
                  </div>
                  
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">エサ:</span>
                    <span className="fish-card-info-value">{fish.bait.join('・')}</span>
                  </div>

                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">仕掛け:</span>
                    <span className="fish-card-info-value">{fish.recommendedTackle.rig}</span>
                  </div>
                </div>

                <p className="fish-card-description">
                  {fish.description}
                </p>

                <div className="fish-tips">
                  <h4>釣りのコツ:</h4>
                  <ul>
                    {fish.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/?fish=${fish.id}`}
                  className="fish-card-button"
                >
                  この魚が釣れるスポットを探す
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredFish.length === 0 && (
          <div className="no-results">
            <p>選択した条件に合う魚種が見つかりませんでした。</p>
          </div>
        )}
      </main>
    </div>
  );
}
