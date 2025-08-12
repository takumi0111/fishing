// 釣り道具・仕掛け情報の型定義
export interface TackleComponent {
  name: string;
  specs: string;
  description: string;
}

export interface TackleSet {
  id: string;
  name: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetFish: string[];
  price: string;
  components: {
    rod: TackleComponent;
    reel: TackleComponent;
    line: TackleComponent;
    rig: TackleComponent;
  };
  additionalItems: string[];
  pros: string[];
  tips: string[];
}

export interface BaitInfo {
  id: string;
  name: string;
  targetFish: string[];
  season: 'all' | 'spring' | 'summer' | 'autumn' | 'winter';
  form: string;
  price: string;
  usage: string;
  tips: string[];
}

export interface SafetyEquipment {
  name: string;
  importance: 'essential' | 'recommended' | 'conditional';
  description: string;
  price: string;
}

export interface BudgetRecommendation {
  budget: string;
  description: string;
  items: string[];
}

export interface TackleGuide {
  beginnerSets: TackleSet[];
  baitGuide: BaitInfo[];
  safetyEquipment: SafetyEquipment[];
}

// 釣り道具・仕掛け情報
export const tackleGuide: TackleGuide = {
  beginnerSets: [
    {
      id: 'sabiki-set',
      name: 'サビキ釣りセット',
      difficulty: 'beginner',
      targetFish: ['aji', 'saba', 'iwashi'],
      price: '3,000-8,000円',
      components: {
        rod: {
          name: 'サビキ竿',
          specs: '2.1m-3.6m',
          description: '初心者向けの軽量で扱いやすい竿'
        },
        reel: {
          name: 'スピニングリール',
          specs: '2000-2500番',
          description: '巻き取りが楽で初心者におすすめ'
        },
        line: {
          name: 'ナイロンライン',
          specs: '2-3号',
          description: '扱いやすく価格も手頃'
        },
        rig: {
          name: 'サビキ仕掛け',
          specs: '6-8本針',
          description: '複数の魚を同時に狙える'
        }
      },
      additionalItems: [
        'アミエビ（撒き餌）',
        'クーラーボックス',
        'バケツ',
        'タオル',
        'プライヤー（針外し）'
      ],
      pros: [
        '初心者でも簡単に始められる',
        '数釣りが楽しめる',
        '比較的安価でそろえられる'
      ],
      tips: [
        '撒き餌をしっかりと使う',
        'アタリがあったら慌てずゆっくり巻く',
        '針に魚が掛かったら一気に引き上げる'
      ]
    },
    {
      id: 'uki-tsuri-set',
      name: 'ウキ釣りセット',
      difficulty: 'intermediate',
      targetFish: ['tai', 'suzuki'],
      price: '8,000-15,000円',
      components: {
        rod: {
          name: '磯竿',
          specs: '4.5m-5.3m 2号',
          description: '感度が良く繊細なアタリが取れる'
        },
        reel: {
          name: 'スピニングリール',
          specs: '3000番',
          description: 'ドラグ性能の良いもの'
        },
        line: {
          name: 'ナイロンライン',
          specs: '3-4号',
          description: '適度な伸びがあり魚の引きを吸収'
        },
        rig: {
          name: 'ウキ釣り仕掛け',
          specs: '棒ウキ+オモリ',
          description: '潮の流れに仕掛けを馴染ませる'
        }
      },
      additionalItems: [
        'オキアミ（エサ）',
        'エビ（エサ）',
        '撒き餌',
        'ウキ止め',
        'ガン玉（調整オモリ）'
      ],
      pros: [
        '大型魚が狙える',
        '釣りの奥深さが味わえる',
        '様々な魚種に対応'
      ],
      tips: [
        'ウキの動きを注意深く観察',
        '潮の流れに合わせて仕掛けを調整',
        'エサ取りに負けない工夫が必要'
      ]
    },
    {
      id: 'nage-tsuri-set',
      name: '投げ釣りセット',
      difficulty: 'intermediate',
      targetFish: ['kisu', 'kasago'],
      price: '10,000-18,000円',
      components: {
        rod: {
          name: '投げ竿',
          specs: '3.6m-4.2m',
          description: '遠投に適した硬めの竿'
        },
        reel: {
          name: 'スピニングリール',
          specs: '4000番',
          description: 'ライン容量が大きく遠投向き'
        },
        line: {
          name: 'ナイロンライン',
          specs: '4-5号',
          description: '遠投に耐える太めのライン'
        },
        rig: {
          name: '投げ釣り仕掛け',
          specs: '天秤+針',
          description: '底を狙う専用仕掛け'
        }
      },
      additionalItems: [
        'イソメ（エサ）',
        'ゴカイ（エサ）',
        '天秤各種',
        'オモリ（15-30号）',
        'エサ箱'
      ],
      pros: [
        '砂浜から手軽に楽しめる',
        '美味しい魚が釣れる',
        '開放感のある釣り'
      ],
      tips: [
        '遠投のフォームを練習',
        'エサは小さめに付ける',
        '砂地のポイントを狙う'
      ]
    },
    {
      id: 'lure-fishing-set',
      name: 'ルアー釣りセット',
      difficulty: 'advanced',
      targetFish: ['suzuki', 'mebaru'],
      price: '15,000-30,000円',
      components: {
        rod: {
          name: 'シーバスロッド',
          specs: '2.7m-3.0m ML',
          description: 'ルアーの操作性に優れた専用竿'
        },
        reel: {
          name: 'スピニングリール',
          specs: '3000-4000番',
          description: '巻き感度の良い高性能リール'
        },
        line: {
          name: 'PEライン',
          specs: '1.0-1.5号',
          description: '感度と強度を両立'
        },
        rig: {
          name: 'ルアー各種',
          specs: 'ミノー・バイブレーション等',
          description: '状況に応じてルアーを選択'
        }
      },
      additionalItems: [
        'ルアーケース',
        'プライヤー',
        'ランディングネット',
        'ヘッドライト',
        'タックルバッグ'
      ],
      pros: [
        'スポーツフィッシングが楽しめる',
        '大型魚との駆け引きが醍醐味',
        'エサが不要で手軽'
      ],
      tips: [
        'ルアーのアクションを覚える',
        'ストラクチャーを狙う',
        '時間帯によってルアーを変える'
      ]
    }
  ],
  
  baitGuide: [
    {
      id: 'ami-ebi',
      name: 'アミエビ',
      targetFish: ['aji', 'saba', 'iwashi'],
      season: 'all',
      form: '冷凍ブロック',
      price: '300-500円',
      usage: '撒き餌・付けエサ両方',
      tips: [
        '解凍してから使用',
        '撒き餌はたっぷりと使う',
        '付けエサは針に適量を付ける'
      ]
    },
    {
      id: 'okiami',
      name: 'オキアミ',
      targetFish: ['tai', 'suzuki', 'aji'],
      season: 'all',
      form: '冷凍パック',
      price: '400-700円',
      usage: '付けエサ・撒き餌',
      tips: [
        '針に刺しやすいサイズを選ぶ',
        '頭と尻尾を取って使うことも',
        '撒き餌に混ぜて使用'
      ]
    },
    {
      id: 'isomeshi',
      name: 'イソメ（ゴカイ）',
      targetFish: ['tai', 'suzuki', 'kisu'],
      season: 'all',
      form: '生きエサ',
      price: '300-600円',
      usage: '付けエサ',
      tips: [
        '生きの良いものを選ぶ',
        '針に通し刺しにする',
        '余ったら冷蔵庫で保管'
      ]
    },
    {
      id: 'ebi',
      name: 'エビ',
      targetFish: ['tai', 'kasago'],
      season: 'all',
      form: '冷凍・生き',
      price: '500-800円',
      usage: '付けエサ',
      tips: [
        '尻尾から頭に向かって刺す',
        '生きエビは活かしバケツで保管',
        '殻を剥いて使うことも'
      ]
    }
  ],
  
  safetyEquipment: [
    {
      name: 'ライフジャケット',
      importance: 'essential',
      description: '水辺での安全確保に必須。膨張式が軽くて便利。',
      price: '3,000-10,000円'
    },
    {
      name: '滑り止め付きシューズ',
      importance: 'recommended',
      description: '濡れた堤防や岩場での転倒防止。',
      price: '2,000-5,000円'
    },
    {
      name: '帽子・日焼け止め',
      importance: 'recommended',
      description: '日差しの強い海辺での熱中症対策。',
      price: '1,000-3,000円'
    },
    {
      name: 'ヘッドライト・懐中電灯',
      importance: 'conditional',
      description: '早朝・夕方・夜釣りで必要。両手が使えるヘッドライトが便利。',
      price: '1,500-5,000円'
    },
    {
      name: 'プライヤー・ハサミ',
      importance: 'recommended',
      description: '針外しやライン切断に必要。安全な釣りには必須。',
      price: '1,000-3,000円'
    },
    {
      name: 'タオル・ウェットティッシュ',
      importance: 'recommended',
      description: '手や道具の清掃、魚の血液処理に必要。',
      price: '500-1,000円'
    }
  ]
};

// 価格帯別おすすめ
export const budgetRecommendations: Record<'low' | 'medium' | 'high', BudgetRecommendation> = {
  low: {
    budget: '5,000円以下',
    description: '最低限の道具で始める',
    items: [
      'コンパクト竿セット（竿・リール・ライン込み）',
      'サビキ仕掛け数セット',
      'アミエビ',
      '小型クーラーボックス',
      'ライフジャケット（中古可）'
    ]
  },
  medium: {
    budget: '10,000円以下',
    description: '快適に釣りを楽しめる',
    items: [
      '品質の良いサビキ竿',
      'スピニングリール',
      '各種仕掛け',
      'エサ・撒き餌',
      'タックルボックス',
      'ライフジャケット',
      '基本的な安全装備'
    ]
  },
  high: {
    budget: '20,000円以下',
    description: '本格的に釣りを始める',
    items: [
      '磯竿・サビキ竿の2本体制',
      '高性能スピニングリール',
      '多様な仕掛け',
      'クーラーボックス（20L以上）',
      '安全装備一式',
      '便利グッズ各種',
      'タックルバッグ'
    ]
  }
};
