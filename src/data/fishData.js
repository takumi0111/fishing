// 魚種データ
export const fishSpecies = [
  {
    id: 'aji',
    name: 'アジ',
    season: ['spring', 'summer', 'autumn'],
    difficulty: 'beginner',
    bestTime: ['dawn', 'evening'],
    recommendedTackle: {
      rod: 'サビキ竿 2.4m-3.6m',
      reel: 'スピニングリール 2500番',
      line: 'ナイロン 2-3号',
      rig: 'サビキ仕掛け'
    },
    bait: ['アミエビ', 'オキアミ'],
    averageSize: '15-25cm',
    description: '初心者に最もおすすめ。サビキ釣りで数釣りが楽しめる。',
    tips: [
      'アミエビをたっぷりと撒き餌に使う',
      '朝夕のマズメ時が最も釣れやすい',
      '群れで泳ぐため、1匹釣れたら連続で狙える'
    ]
  },
  {
    id: 'saba',
    name: 'サバ',
    season: ['summer', 'autumn'],
    difficulty: 'beginner',
    bestTime: ['dawn', 'morning', 'evening'],
    recommendedTackle: {
      rod: 'サビキ竿 2.7m-3.6m',
      reel: 'スピニングリール 2500-3000番',
      line: 'ナイロン 3-4号',
      rig: 'サビキ仕掛け'
    },
    bait: ['アミエビ', 'オキアミ'],
    averageSize: '25-35cm',
    description: '引きが強く、釣りごたえ抜群。脂がのって美味しい。',
    tips: [
      '引きが強いのでドラグ調整に注意',
      '群れで行動するため、ポイントを見つけることが重要',
      '新鮮なうちに血抜きをすると美味しい'
    ]
  },
  {
    id: 'iwashi',
    name: 'イワシ',
    season: ['spring', 'summer', 'autumn'],
    difficulty: 'beginner',
    bestTime: ['dawn', 'evening'],
    recommendedTackle: {
      rod: 'サビキ竿 2.1m-2.7m',
      reel: 'スピニングリール 2000-2500番',
      line: 'ナイロン 1.5-2号',
      rig: 'サビキ仕掛け（小針）'
    },
    bait: ['アミエビ'],
    averageSize: '10-18cm',
    description: '大きな群れで泳ぐため、数釣りが期待できる小型魚。',
    tips: [
      '小さな針の仕掛けを使用',
      '撒き餌を多めに使って群れを寄せる',
      '大群が回遊してくるタイミングを狙う'
    ]
  },
  {
    id: 'tai',
    name: 'タイ',
    season: ['spring', 'autumn'],
    difficulty: 'intermediate',
    bestTime: ['dawn', 'evening'],
    recommendedTackle: {
      rod: '磯竿 2号 4.5m-5.3m',
      reel: 'スピニングリール 3000番',
      line: 'ナイロン 3-4号',
      rig: 'ウキ釣り仕掛け'
    },
    bait: ['オキアミ', 'エビ', 'イソメ'],
    averageSize: '25-40cm',
    description: '釣り上げた時の喜びは格別。上級者向けのターゲット。',
    tips: [
      'エサ取りが多いポイントでは工夫が必要',
      '潮の流れを読むことが重要',
      'アタリが繊細なので集中が必要'
    ]
  },
  {
    id: 'suzuki',
    name: 'スズキ（シーバス）',
    season: ['summer', 'autumn'],
    difficulty: 'advanced',
    bestTime: ['dawn', 'evening', 'night'],
    recommendedTackle: {
      rod: 'シーバスロッド 2.7m-3.0m',
      reel: 'スピニングリール 3000-4000番',
      line: 'PE 1-1.5号',
      rig: 'ルアー'
    },
    bait: ['ルアー（バイブレーション、ミノー）'],
    averageSize: '40-70cm',
    description: '都市部の河川や港でも狙える大型魚。ルアー釣りが主流。',
    tips: [
      'ストラクチャー周りを狙う',
      '潮の動きに合わせてルアーを選択',
      '夜釣りでは表層を意識する'
    ]
  }
];

// 季節情報
export const seasons = {
  spring: { name: '春', months: [3, 4, 5], description: '魚の活性が上がる好シーズン' },
  summer: { name: '夏', months: [6, 7, 8], description: '早朝・夕方がおすすめ' },
  autumn: { name: '秋', months: [9, 10, 11], description: '一年で最も魚種が豊富' },
  winter: { name: '冬', months: [12, 1, 2], description: '厳しいが良型が期待できる' }
};

// 難易度レベル
export const difficultyLevels = {
  beginner: { name: '初心者', color: 'green', description: '初めての方でも安心' },
  intermediate: { name: '中級者', color: 'yellow', description: 'ある程度の経験が必要' },
  advanced: { name: '上級者', color: 'red', description: '豊富な経験と技術が必要' }
};
