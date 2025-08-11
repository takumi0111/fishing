import Image from "next/image";

export default function Home() {
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
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            釣りスポットを探す
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* エリア選択 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                エリア
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">エリアを選択</option>
                <option value="tokyo">東京湾</option>
                <option value="kanagawa">神奈川</option>
                <option value="chiba">千葉</option>
                <option value="shizuoka">静岡</option>
              </select>
            </div>

            {/* 釣りたい魚 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                釣りたい魚
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">魚種を選択</option>
                <option value="aji">アジ</option>
                <option value="saba">サバ</option>
                <option value="iwashi">イワシ</option>
                <option value="tai">タイ</option>
                <option value="suzuki">スズキ</option>
              </select>
            </div>

            {/* 時期 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                時期
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">時期を選択</option>
                <option value="spring">春（3-5月）</option>
                <option value="summer">夏（6-8月）</option>
                <option value="autumn">秋（9-11月）</option>
                <option value="winter">冬（12-2月）</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium">
            スポットを検索 🔍
          </button>
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

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">安全・マナー</h3>
            <p className="text-gray-600 text-sm">
              天候情報・ルール・マナーで安心安全な釣りを
            </p>
          </div>
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
