'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FishInfo() {
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // 魚の情報データ（シマノサイト風）
  const fishData = [
    {
      id: 'aji',
      name: 'アジ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '磯・防波堤', '船'],
      size: '15-30cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'サビキ、イソメ、小魚',
      description: 'サビキ釣りで手軽に釣れる初心者向けの魚。群れで行動するため、群れを見つければ数釣りが楽しめる。',
      tips: 'コマセを効かせてサビキ釣りが基本。群れの回遊時間を狙う。',
      ecology: '回遊魚で春から秋にかけて沿岸部に接岸。産卵期は特に活発。'
    },
    {
      id: 'saba',
      name: 'サバ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '岸壁', '船'],
      size: '20-40cm',
      bestTime: '朝マズメ',
      bait: 'サビキ、小魚、ジグ',
      description: '回遊魚で群れで行動。アジと一緒に釣れることも多い。引きが強く楽しい魚。',
      tips: 'アジより深い層を泳ぐ。サビキの針を大きめにして狙う。',
      ecology: '青物の代表格。回遊性が強く、時期により接岸する。'
    },
    {
      id: 'iwashi',
      name: 'イワシ',
      image: '🐟',
      difficulty: 1,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '岸壁'],
      size: '10-15cm',
      bestTime: '早朝',
      bait: 'サビキ、コマセ',
      description: '最も釣りやすい魚の一つ。大群で回遊するため数釣りが楽しめる。',
      tips: '小さめのサビキ針で狙う。群れを見つけたら手返し良く釣る。',
      ecology: '大群で回遊する小魚。他の魚のエサにもなる重要な魚種。'
    },
    {
      id: 'mebaru',
      name: 'メバル',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '冬'],
      locations: ['堤防', '磯・防波堤', 'サーフ', '船'],
      size: '15-25cm',
      bestTime: '夜間・夜明け前',
      bait: 'イソメ、エビ、ワーム',
      description: '夜行性の根魚。繊細なアタリが特徴で、ゲーム性の高い釣りが楽しめる。',
      tips: '夜釣りが基本。ゆっくりとした誘いで根周りを狙う。',
      ecology: '岩礁帯に住む根魚。春の産卵期は浅場に移動。'
    },
    {
      id: 'kasago',
      name: 'カサゴ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋', '冬'],
      locations: ['堤防', '磯・防波堤', '岸壁', '河口', '船'],
      size: '15-25cm',
      bestTime: '一日中',
      bait: 'イソメ、エビ、小魚',
      description: '一年中釣れる根魚の代表格。初心者でも釣りやすく、食味も良い。',
      tips: '根の際を丁寧に探る。根掛かりに注意して釣る。',
      ecology: '岩礁帯の穴に住む根魚。縄張り意識が強く、同じ場所にいることが多い。'
    },
    {
      id: 'kisu',
      name: 'キス',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', 'サーフ', '船'],
      size: '15-25cm',
      bestTime: '昼間',
      bait: 'イソメ、エビ',
      description: '砂地の底に住む魚。投げ釣りの代表的なターゲット。上品な食味。',
      tips: '投げ釣りで広範囲を探る。底を這わせるように誘う。',
      ecology: '砂地を好む魚。暖かくなると浅場に移動して活発になる。'
    },
    {
      id: 'tai',
      name: 'マダイ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '磯・防波堤', 'サーフ', '船'],
      size: '30-60cm',
      bestTime: '朝マズメ',
      bait: 'エビ、イカ、小魚',
      description: '魚の王様と呼ばれる高級魚。釣り上げた時の喜びはひとしお。',
      tips: '底から1-2m上を狙う。繊細なアタリを逃さない集中力が必要。',
      ecology: '深場に住む高級魚。春の産卵期には浅場に接岸する。'
    },
    {
      id: 'suzuki',
      name: 'スズキ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋', '冬'],
      locations: ['河口', '堤防', '岸壁', '磯・防波堤'],
      size: '40-80cm',
      bestTime: '夜間・朝マズメ',
      bait: 'ルアー、エビ、小魚',
      description: 'ルアーフィッシングの人気ターゲット。河口や港湾部で狙える大型魚。',
      tips: 'ルアーでの表層から中層を意識して狙う。夜間の常夜灯周りが狙い目。',
      ecology: '汽水域を好む大型魚。夜行性で小魚を捕食する。'
    },
    {
      id: 'aorika',
      name: 'アオリイカ',
      image: '🦑',
      difficulty: 3,
      seasons: ['春', '秋', '冬'],
      locations: ['堤防', '磯・防波堤', 'サーフ', '船'],
      size: '20-40cm',
      bestTime: '朝夕マズメ',
      bait: 'エギ、小魚',
      description: 'エギングの人気ターゲット。秋は新子、春は大型の親イカが狙える。',
      tips: 'エギを使ったシャクリとフォールで誘う。海藻帯周辺が好ポイント。',
      ecology: '海藻帯で産卵する。春と秋で異なるサイズが釣れる。'
    },
    {
      id: 'hirame',
      name: 'ヒラメ',
      image: '🐟',
      difficulty: 4,
      seasons: ['春', '秋'],
      locations: ['堤防', '磯・防波堤', '浜', '河口', '船'],
      size: '30-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: '小魚、ワーム、ジグ',
      description: '座布団と呼ばれる大型の高級魚。サーフフィッシングの憧れのターゲット。',
      tips: '砂地の底層でベイトフィッシュを意識して狙う。広範囲を探ることが重要。',
      ecology: '砂地に潜んで小魚を捕食する。フラットフィッシュの代表格。'
    }
  ];

  const seasons = [
    { key: 'all', name: '全て', icon: '�' },
    { key: '春', name: '春', icon: '🌸' },
    { key: '夏', name: '夏', icon: '☀️' },
    { key: '秋', name: '秋', icon: '🍂' },
    { key: '冬', name: '冬', icon: '❄️' }
  ];

  const difficulties = [
    { key: 'all', name: '全て', icon: '�' },
    { key: '1', name: '★☆☆☆', icon: '⭐' },
    { key: '2', name: '★★☆☆', icon: '⭐' },
    { key: '3', name: '★★★☆', icon: '⭐' },
    { key: '4', name: '★★★★', icon: '⭐' }
  ];

  const filteredFish = fishData.filter(fish => {
    const seasonMatch = selectedSeason === 'all' || fish.seasons.includes(selectedSeason);
    const difficultyMatch = selectedDifficulty === 'all' || fish.difficulty.toString() === selectedDifficulty;
    return seasonMatch && difficultyMatch;
  });

  const getDifficultyStars = (level) => {
    const stars = [];
    for (let i = 1; i <= 4; i++) {
      stars.push(
        <span key={i} className={i <= level ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">🐟 季節別の釣れる魚</h1>
              <p className="text-blue-100 text-lg">今釣れる魚から釣りを決める</p>
            </div>
            <Link href="/" className="bg-blue-500 hover:bg-blue-800 px-6 py-3 rounded-lg transition-colors font-medium">
              ホームに戻る
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 説明文 */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              釣り場や釣り方を決めるのが難しい場合は、「なにを釣りたいか」「食べるのか、釣るだけなのか」を基準に選んでみるのもあり。
              身近な魚、食べてみたい魚、聞いたことがある魚など、気になった魚をチェックしよう。
            </p>
          </div>

          {/* フィルター */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">検索条件</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 季節フィルター */}
              <div>
                <h3 className="font-medium text-gray-700 mb-4 flex items-center">
                  <span className="text-lg mr-2">🗓️</span>
                  季節で絞り込み
                </h3>
                <div className="flex flex-wrap gap-2">
                  {seasons.map((season) => (
                    <button
                      key={season.key}
                      onClick={() => setSelectedSeason(season.key)}
                      className={`px-4 py-2 rounded-full transition-colors font-medium ${
                        selectedSeason === season.key
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-1">{season.icon}</span>
                      {season.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 難易度フィルター */}
              <div>
                <h3 className="font-medium text-gray-700 mb-4 flex items-center">
                  <span className="text-lg mr-2">⭐</span>
                  難易度で絞り込み
                </h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty.key}
                      onClick={() => setSelectedDifficulty(difficulty.key)}
                      className={`px-4 py-2 rounded-full transition-colors font-medium ${
                        selectedDifficulty === difficulty.key
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {difficulty.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 検索結果表示 */}
          <div className="mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-blue-600">{filteredFish.length}</span>
              匹の魚が見つかりました
            </p>
          </div>

          {/* 魚の一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFish.map((fish) => (
              <div key={fish.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* 魚の画像エリア */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 text-center">
                  <div className="text-6xl mb-2">{fish.image}</div>
                  <h3 className="text-2xl font-bold text-gray-800">{fish.name}</h3>
                </div>

                {/* 魚の情報 */}
                <div className="p-6">
                  {/* 難易度 */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">難易度</span>
                    <div className="flex items-center">
                      {getDifficultyStars(fish.difficulty)}
                    </div>
                  </div>

                  {/* 基本情報 */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">サイズ</span>
                      <span className="font-medium">{fish.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">ベストタイム</span>
                      <span className="font-medium">{fish.bestTime}</span>
                    </div>
                  </div>

                  {/* 季節 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {fish.seasons.map((season, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 釣り場 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {fish.locations.map((location, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 説明文 */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {fish.description}
                  </p>

                  {/* アクションボタン */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        // 詳細情報をアラートで表示
                        alert(`${fish.name}の詳細情報：\n\n釣り方のコツ：${fish.tips}\n\n生態：${fish.ecology}\n\nエサ：${fish.bait}`);
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                    >
                      詳しく見る
                    </button>
                    <Link 
                      href={`/?fish=${fish.id}`}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-center block"
                    >
                      🎣 この魚が釣れるスポットを探す
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 検索結果が0の場合 */}
          {filteredFish.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <div className="text-6xl mb-4">🎣</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                条件に合う魚が見つかりませんでした
              </h3>
              <p className="text-gray-600 mb-6">
                季節や難易度の条件を変更して、再度検索してみてください。
              </p>
              <button
                onClick={() => {
                  setSelectedSeason('all');
                  setSelectedDifficulty('all');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-medium"
              >
                条件をリセット
              </button>
            </div>
          )}

          {/* 追加情報 */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 釣りの基本知識</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h4 className="font-semibold mb-2">潮の影響</h4>
                <p className="text-sm text-gray-600">大潮・中潮の時期は魚の活性が高くなります</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌡️</div>
                <h4 className="font-semibold mb-2">水温の影響</h4>
                <p className="text-sm text-gray-600">魚種によって適正水温が異なり活性に影響</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌙</div>
                <h4 className="font-semibold mb-2">月齢の影響</h4>
                <p className="text-sm text-gray-600">新月・満月前後は特に活性が高くなります</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⛅</div>
                <h4 className="font-semibold mb-2">天候の影響</h4>
                <p className="text-sm text-gray-600">低気圧接近前後は魚の食いが活発に</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
