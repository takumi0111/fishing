// 魚種データの型定義
export interface RecommendedTackle {
  rod: string;
  reel: string;
  line: string;
  rig: string;
}

export interface FishSpecies {
  id: string;
  name: string;
  season: SeasonKey[];
  difficulty: DifficultyKey;
  bestTime: TimeKey[];
  recommendedTackle: RecommendedTackle;
  bait: string[];
  averageSize: string;
  description: string;
  tips: string[];
  image?: string; // 魚の画像ファイル名（オプショナル）
}

export type SeasonKey = 'spring' | 'summer' | 'autumn' | 'winter';
export type DifficultyKey = 'beginner' | 'intermediate' | 'advanced';
export type TimeKey = 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';

export interface SeasonInfo {
  name: string;
  months: number[];
  description: string;
}

export interface DifficultyLevel {
  name: string;
  color: string;
  description: string;
}

// 魚種データ
export const fishSpecies: FishSpecies[] = [
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
    ],
    image: 'saba.png'
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
  },
  {
    id: 'mebaru',
    name: 'メバル',
    season: ['winter', 'spring'],
    difficulty: 'intermediate',
    bestTime: ['evening', 'night'],
    recommendedTackle: {
      rod: 'メバリングロッド 1.8m-2.1m',
      reel: 'スピニングリール 2000番',
      line: 'PE 0.3-0.6号',
      rig: 'ジグヘッド + ワーム'
    },
    bait: ['ワーム', 'オキアミ', 'イソメ'],
    averageSize: '15-25cm',
    description: '夜釣りのターゲット。繊細なアタリが楽しめる。',
    tips: [
      '明暗の境目を狙う',
      '軽いジグヘッドでゆっくりと誘う',
      '常夜灯周りが好ポイント'
    ]
  },
  {
    id: 'kasago',
    name: 'カサゴ',
    season: ['autumn', 'winter', 'spring'],
    difficulty: 'beginner',
    bestTime: ['evening', 'night'],
    recommendedTackle: {
      rod: '穴釣り専用竿 1.2m-1.8m',
      reel: 'スピニングリール 2000番',
      line: 'ナイロン 2-3号',
      rig: 'ブラクリ仕掛け'
    },
    bait: ['オキアミ', 'イソメ', '小魚'],
    averageSize: '15-25cm',
    description: '根魚の代表格。穴釣りで手軽に狙える。',
    tips: [
      'テトラポッドの隙間を狙う',
      '仕掛けを底まで落とす',
      '根がかりに注意'
    ]
  },
  {
    id: 'kisu',
    name: 'キス',
    season: ['spring', 'summer', 'autumn'],
    difficulty: 'beginner',
    bestTime: ['morning', 'afternoon'],
    recommendedTackle: {
      rod: 'キス専用竿 2.7m-3.6m',
      reel: 'スピニングリール 2500番',
      line: 'ナイロン 2号',
      rig: 'キス釣り仕掛け'
    },
    bait: ['イソメ', 'ゴカイ'],
    averageSize: '15-25cm',
    description: '砂浜からの投げ釣りで人気。美味しい白身魚。',
    tips: [
      '砂地のポイントを狙う',
      '遠投して広範囲を探る',
      'エサは小さめに付ける'
    ]
  },
  {
    id: 'katuo',
    name: 'カツオ',
    season: ['spring', 'summer', 'autumn'],
    difficulty: 'advanced',
    bestTime: ['dawn', 'morning', 'evening'],
    recommendedTackle: {
      rod: 'カツオ竿 3.0m-3.6m',
      reel: 'スピニングリール 4000-5000番',
      line: 'PE 2-3号',
      rig: 'カツオ仕掛け'
    },
    bait: ['イワシ', 'サンマ', 'ルアー'],
    averageSize: '40-60cm',
    description: '回遊魚の王様。引きが強く、釣りごたえ抜群。',
    tips: [
      '回遊のタイミングを狙う',
      '強いタックルが必要',
      '船釣りが主流だが堤防からも狙える'
    ],
    image: 'katuo.png'
  },
  {
    id: 'inada',
    name: 'イナダ（ブリの幼魚）',
    season: ['summer', 'autumn'],
    difficulty: 'intermediate',
    bestTime: ['dawn', 'morning', 'evening'],
    recommendedTackle: {
      rod: 'ライトショアジギング 2.7m-3.0m',
      reel: 'スピニングリール 3000-4000番',
      line: 'PE 1.5-2号',
      rig: 'メタルジグ'
    },
    bait: ['ルアー（メタルジグ、ミノー）'],
    averageSize: '30-40cm',
    description: 'ブリの幼魚。青物らしい強い引きが楽しめる。',
    tips: [
      'ナブラ（魚群）を見つける',
      'メタルジグでスピーディーに誘う',
      '回遊魚なので時合いが重要'
    ],
    image: 'inada.png'
  },
  {
    id: 'warasa',
    name: 'ワラサ（ブリの若魚）',
    season: ['autumn', 'winter'],
    difficulty: 'advanced',
    bestTime: ['dawn', 'morning', 'evening'],
    recommendedTackle: {
      rod: 'ショアジギング 3.0m-3.6m',
      reel: 'スピニングリール 4000-5000番',
      line: 'PE 2-3号',
      rig: 'ヘビーメタルジグ'
    },
    bait: ['ルアー（メタルジグ、大型ミノー）'],
    averageSize: '60-80cm',
    description: 'ブリの若魚で大型。非常に強い引きを楽しめる。',
    tips: [
      '大型のルアーを使用',
      '強力なタックルが必要',
      '潮通しの良いポイントを狙う'
    ],
    image: 'wrasa.png'
  }
];

// 季節情報
export const seasons: Record<SeasonKey, SeasonInfo> = {
  spring: { name: '春', months: [3, 4, 5], description: '魚の活性が上がる好シーズン' },
  summer: { name: '夏', months: [6, 7, 8], description: '早朝・夕方がおすすめ' },
  autumn: { name: '秋', months: [9, 10, 11], description: '一年で最も魚種が豊富' },
  winter: { name: '冬', months: [12, 1, 2], description: '厳しいが良型が期待できる' }
};

// 難易度レベル
export const difficultyLevels: Record<DifficultyKey, DifficultyLevel> = {
  beginner: { name: '初心者', color: 'green', description: '初めての方でも安心' },
  intermediate: { name: '中級者', color: 'yellow', description: 'ある程度の経験が必要' },
  advanced: { name: '上級者', color: 'red', description: '豊富な経験と技術が必要' }
};

// 時間帯情報
export const timeSlots: Record<TimeKey, { name: string; description: string }> = {
  dawn: { name: '夜明け', description: '日の出前後の薄明るい時間帯' },
  morning: { name: '朝', description: '日の出から午前中' },
  afternoon: { name: '午後', description: '昼間の時間帯' },
  evening: { name: '夕方', description: '日没前後の薄暗い時間帯' },
  night: { name: '夜', description: '完全に暗くなった時間帯' }
};
