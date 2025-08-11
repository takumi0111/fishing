'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [area, setArea] = useState('');
  const [fish, setFish] = useState('');
  const [customFish, setCustomFish] = useState('');
  const [startDate, setStartDate] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
    { value: 'kumamoto', label: '🐻 熊本県', group: '🌺 九州・沖縄' },
    { value: 'kagoshima', label: '🌋 鹿児島県', group: '🌺 九州・沖縄' },
    { value: 'okinawa', label: '🏝️ 沖縄県', group: '🌺 九州・沖縄' },
    { value: 'kyushu', label: '🌺 九州・沖縄全域', group: '🌺 九州・沖縄' }
  ];

  // 魚種オプション
  const fishOptions = [
    { value: '', label: '🐟 魚種を選択してください', description: '' },
    { value: 'aji', label: '🐟 アジ', description: '初心者おすすめ' },
    { value: 'saba', label: '🐟 サバ', description: '回遊魚' },
    { value: 'iwashi', label: '🐟 イワシ', description: '数釣り' },
    { value: 'mebaru', label: '🐟 メバル', description: '夜釣り' },
    { value: 'kasago', label: '🐟 カサゴ', description: '根魚' },
    { value: 'kisu', label: '🐟 キス', description: '投げ釣り' },
    { value: 'tai', label: '🎣 マダイ', description: '高級魚' },
    { value: 'suzuki', label: '🐟 スズキ', description: 'シーバス' },
    { value: 'aorika', label: '🦑 アオリイカ', description: 'エギング' },
    { value: 'hirame', label: '🐟 ヒラメ', description: 'フラットフィッシュ' },
    { value: 'other', label: '✏️ その他', description: '自由入力' }
  ];

  // 外部クリックでドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (areaDropdownRef.current && !areaDropdownRef.current.contains(event.target)) {
        setAreaDropdownOpen(false);
      }
      if (fishDropdownRef.current && !fishDropdownRef.current.contains(event.target)) {
        setFishDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // URLパラメータから魚種を取得して設定
  useEffect(() => {
    const fishParam = searchParams.get('fish');
    if (fishParam) {
      setFish(fishParam);
    }
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    // 実際の魚種を取得（カスタム入力があればそれを使用）
    const actualFish = fish === 'other' ? customFish : fish;
    
    // 最低1つの条件が選択されているかチェック
    if (!area && !actualFish && !startDate) {
      alert('検索条件を最低1つは選択してください');
      return;
    }
    
    // カスタム魚種が選択されているが入力されていない場合
    if (fish === 'other' && !customFish.trim()) {
      alert('魚種名を入力してください');
      return;
    }

    setIsSearching(true);

    // 検索パラメータを構築
    const params = new URLSearchParams();
    if (area) params.append('area', area);
    if (actualFish) params.append('fish', actualFish);
    if (startDate) params.append('startDate', startDate);

    // 検索結果ページに遷移
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* ヘッダー */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            🎣 海釣りスポット案内
            <span className="text-blue-200 text-lg font-normal">初心者向け</span>
          </h1>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* ウェルカムメッセージ */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            初心者でも安心！海釣りを始めよう
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            あなたにピッタリの釣りスポットと道具をご提案します。
            安全で楽しい海釣り体験をサポートします。
          </p>
        </div>

        {/* 検索セクション */}
        {/* モダンな検索フォーム */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl shadow-xl border border-blue-100 p-8 mb-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              あなたにピッタリの釣りスポットを見つけよう
            </h3>
            <p className="text-gray-600">エリア・魚種・日程から最適なスポットをAIがご提案します</p>
          </div>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* エリア選択 - カスタムドロップダウン */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <label className="text-lg font-semibold text-gray-800">
                    エリア
                  </label>
                </div>
                
                <div className="relative" ref={areaDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white text-left flex items-center justify-between"
                  >
                    <span className={area ? 'text-gray-900' : 'text-gray-500'}>
                      {area ? areaOptions.find(opt => opt.value === area)?.label : '🗾 エリアを選択してください'}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${areaDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {areaDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {areaOptions.reduce((groups, option) => {
                        const group = option.group || 'default';
                        if (!groups[group]) groups[group] = [];
                        groups[group].push(option);
                        return groups;
                      }, {}).map ? Object.entries(areaOptions.reduce((groups, option) => {
                        const group = option.group || 'default';
                        if (!groups[group]) groups[group] = [];
                        groups[group].push(option);
                        return groups;
                      }, {})).map(([groupName, options]) => (
                        <div key={groupName}>
                          {groupName !== 'default' && groupName && (
                            <div className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-50 border-b">
                              {groupName}
                            </div>
                          )}
                          {options.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setArea(option.value);
                                setAreaDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-700 transition-colors ${
                                area === option.value ? 'bg-blue-100 text-blue-700' : 'text-gray-900'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )) : null}
                    </div>
                  )}
                </div>
              </div>

              {/* 釣りたい魚 - カスタムドロップダウン */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <label className="text-lg font-semibold text-gray-800">
                    ターゲット
                  </label>
                </div>
                
                <div className="relative" ref={fishDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setFishDropdownOpen(!fishDropdownOpen)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white text-left flex items-center justify-between"
                  >
                    <span className={fish ? 'text-gray-900' : 'text-gray-500'}>
                      {fish ? fishOptions.find(opt => opt.value === fish)?.label : '🐟 魚種を選択してください'}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${fishDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {fishDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {fishOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFish(option.value);
                            setFishDropdownOpen(false);
                            if (option.value !== 'other') {
                              setCustomFish('');
                            }
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 last:border-b-0 ${
                            fish === option.value ? 'bg-blue-100 text-blue-700' : 'text-gray-900'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option.label}</span>
                            {option.description && (
                              <span className="text-sm text-gray-500">({option.description})</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {fish === 'other' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={customFish}
                      onChange={(e) => setCustomFish(e.target.value)}
                      placeholder="🐟 釣りたい魚種を入力（例：ブリ、タコ、カンパチなど）"
                      className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-blue-50"
                    />
                  </div>
                )}
              </div>

              {/* 釣行予定日 */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <label className="text-lg font-semibold text-gray-800">
                    釣行予定日
                  </label>
                </div>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                />
                <p className="text-sm text-gray-500 mt-2">
                  📅 季節に応じた最適なスポットをご提案
                </p>
              </div>
            </div>

            <div className="text-center">
              <button 
                type="submit"
                disabled={isSearching}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none text-lg"
              >
                {isSearching ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    検索中...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    🎣 最適な釣りスポットを検索
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* 機能紹介カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">スポット情報</h3>
            <p className="text-gray-600 text-sm">
              初心者向けの安全な釣りスポットを厳選してご紹介
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">道具ガイド</h3>
            <p className="text-gray-600 text-sm">
              釣りたい魚に最適な竿・リール・仕掛けをご提案
            </p>
          </div>

          <Link href="/fish-info" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">🐟</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">魚の情報</h3>
            <p className="text-gray-600 text-sm">
              季節・時間帯別の魚種情報と生態データ
            </p>
          </Link>
        </div>

        {/* お役立ち情報 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            初心者のための基本情報
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">🌊 今の季節におすすめ</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• アジ - サビキ釣りで初心者でも簡単</li>
                <li>• イワシ - 群れで釣れるので数釣りが楽しめる</li>
                <li>• サバ - 引きが強く釣りごたえ抜群</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">🎒 基本の持ち物</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ライフジャケット（安全のため必須）</li>
                <li>• 竿・リール・仕掛け</li>
                <li>• クーラーボックス・氷</li>
                <li>• タオル・帽子・日焼け止め</li>
              </ul>
            </div>
          </div>

          {/* AI情報についての説明 */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">🤖</span>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">AI による情報提供</h4>
                  <p className="text-sm text-blue-700">
                    検索結果はGemini AIが各種釣り情報サイト、自治体の観光情報、釣り場ガイドなどを参考に生成します。
                    情報源と最終更新年も併せて表示し、透明性を確保しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 海釣りスポット案内 - 初心者向け釣り情報サイト
          </p>
        </div>
      </footer>
    </div>
  );
}
