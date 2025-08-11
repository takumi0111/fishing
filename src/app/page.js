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

  // URLパラメータから初期値を設定
  useEffect(() => {
    const areaParam = searchParams.get('area');
    const fishParam = searchParams.get('fish');
    if (areaParam) setArea(areaParam);
    if (fishParam) setFish(fishParam);
  }, [searchParams]);

  const handleSearch = async (e) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">
            🎣 海釣りガイド　
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

        {/* 検索フォーム */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            釣りスポットを探す
          </h3>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* エリア選択 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  エリア
                </label>
                <select 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  釣りたい魚
                </label>
                <select 
                  value={fish}
                  onChange={(e) => {
                    setFish(e.target.value);
                    if (e.target.value !== 'other') {
                      setCustomFish('');
                    }
                  }}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <div className="mt-2">
                    <input
                      type="text"
                      value={customFish}
                      onChange={(e) => setCustomFish(e.target.value)}
                      placeholder="釣りたい魚種を入力してください（例：ブリ、タコ、カンパチなど）"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* 釣行予定日 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  釣行予定日
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSearching}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors font-medium"
            >
              {isSearching ? '検索中...' : '釣りスポットを検索'}
            </button>
          </form>
        </div>

        {/* 機能紹介カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">天候・潮汐</h3>
            <p className="text-gray-600 text-sm">
              釣行に最適なコンディションをチェック
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🐟</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">魚の情報</h3>
            <p className="text-gray-600 text-sm mb-4">
              魚種別の特徴や釣り方を詳しく解説
            </p>
            <Link 
              href="/fish-info"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm"
            >
              詳しく見る
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">安全ガイド</h3>
            <p className="text-gray-600 text-sm mb-4">
              安全な釣りのためのルールとマナーをご紹介
            </p>
            <Link 
              href="/safety-guide"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 text-sm"
            >
              詳しく見る
            </Link>
          </div>
        </div>

        {/* 初心者のための基本情報 */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            初心者のための基本情報
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 今の季節におすすめ */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🌊</span>
                今の季節におすすめ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-800">アジ</span>
                    <span className="text-gray-600 block text-sm">サビキ釣りで初心者でも簡単</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-800">イワシ</span>
                    <span className="text-gray-600 block text-sm">群れで釣れるので数釣りが楽しめる</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-800">サバ</span>
                    <span className="text-gray-600 block text-sm">引きが強く釣りごたえ抜群</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 基本の持ち物 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎒</span>
                基本の持ち物
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">
                    <span className="font-semibold text-red-600">ライフジャケット</span>
                    <span className="text-gray-600 block text-sm">（安全のため必須）</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">竿・リール・仕掛け</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">クーラーボックス・氷</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">タオル・帽子・日焼け止め</span>
                </li>
              </ul>
            </div>

            {/* AI による情報提供 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🤖</span>
                AI による情報提供
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
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
