// 釣りスポットデータ（関東近郊）
export const fishingSpots = [
  {
    id: 'tokyo-odaiba',
    name: 'お台場海浜公園',
    prefecture: '東京都',
    area: 'tokyo',
    location: {
      lat: 35.6286,
      lng: 139.7734
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '5分',
      facilities: ['トイレ', 'コンビニ', '自販機']
    },
    targetFish: ['aji', 'saba', 'iwashi'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'beginner',
    safetyLevel: 'high',
    description: 'アクセス抜群の都市型釣りスポット。初心者や家族連れにおすすめ。',
    features: [
      '都心からのアクセスが良好',
      '安全な護岸で足場が良い',
      '周辺施設が充実',
      'ライフジャケット着用義務なし（推奨）'
    ],
    regulations: [
      '夜間釣り禁止（6:00-18:00のみ）',
      '投げ釣り禁止',
      'バーベキュー禁止'
    ],
    tips: [
      'サビキ釣りが効果的',
      '潮の満ち引きを確認してから行く',
      '週末は混雑するため平日がおすすめ'
    ]
  },
  {
    id: 'kanagawa-yokohama-bay',
    name: '横浜ベイブリッジ下',
    prefecture: '神奈川県',
    area: 'kanagawa',
    location: {
      lat: 35.4550,
      lng: 139.6439
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '15分',
      facilities: ['トイレ', '自販機']
    },
    targetFish: ['aji', 'saba', 'suzuki', 'tai'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '横浜港の人気スポット。多彩な魚種が狙える。',
    features: [
      '魚種が豊富',
      '大型魚も期待できる',
      '夜釣りも可能',
      'ベテランアングラーが多い'
    ],
    regulations: [
      'ライフジャケット着用推奨',
      '投げ釣りは周囲に注意',
      'ゴミの持ち帰り必須'
    ],
    tips: [
      'ルアー釣りでシーバス狙い',
      '潮が動く時間帯が効果的',
      '足場に注意して安全確保'
    ]
  },
  {
    id: 'chiba-makuhari',
    name: '幕張海浜公園',
    prefecture: '千葉県',
    area: 'chiba',
    location: {
      lat: 35.6471,
      lng: 140.0342
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '10分',
      facilities: ['トイレ', 'コンビニ', '自販機', 'レストラン']
    },
    targetFish: ['aji', 'iwashi', 'saba'],
    bestSeason: ['summer', 'autumn'],
    difficulty: 'beginner',
    safetyLevel: 'high',
    description: '家族連れに人気の安全な釣りスポット。',
    features: [
      '安全な人工海浜',
      '家族向け施設が充実',
      '初心者講習会を開催',
      '駐車場完備'
    ],
    regulations: [
      '指定エリア内での釣りのみ',
      '夜釣り禁止',
      'バーベキューエリア別途あり'
    ],
    tips: [
      'サビキ釣りが主流',
      '子供連れでも安心',
      '潮の良い日を狙って訪問'
    ]
  },
  {
    id: 'kanagawa-enoshima',
    name: '江の島周辺',
    prefecture: '神奈川県',
    area: 'kanagawa',
    location: {
      lat: 35.2971,
      lng: 139.4808
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '20分',
      facilities: ['トイレ', 'コンビニ', '釣具店', 'レストラン']
    },
    targetFish: ['aji', 'saba', 'tai', 'suzuki'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '湘南エリアの代表的な釣りスポット。観光地としても人気。',
    features: [
      '景色が美しい',
      '観光と釣りを両方楽しめる',
      '多様な釣り場がある',
      '釣具店が近くにある'
    ],
    regulations: [
      '一部エリア立入禁止',
      'ライフジャケット着用推奨',
      '遊泳区域での釣り禁止'
    ],
    tips: [
      '岩場での釣りは足元注意',
      '潮の満ち引きで釣れるポイントが変わる',
      '地元釣具店で情報収集がおすすめ'
    ]
  },
  {
    id: 'chiba-choshi',
    name: '銚子港周辺',
    prefecture: '千葉県',
    area: 'chiba',
    location: {
      lat: 35.7347,
      lng: 140.8317
    },
    accessibility: {
      parking: true,
      publicTransport: false,
      walkFromStation: '車必須',
      facilities: ['トイレ', '釣具店', '食堂']
    },
    targetFish: ['aji', 'saba', 'iwashi', 'tai'],
    bestSeason: ['summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '千葉県東部の本格的な釣りスポット。豊富な魚種が期待できる。',
    features: [
      '魚の種類が豊富',
      '本格的な海釣りが楽しめる',
      '漁港の雰囲気を味わえる',
      '新鮮な海の幸が味わえる'
    ],
    regulations: [
      '漁業関係者の邁進に配慮',
      'ライフジャケット着用必須',
      '立入禁止区域の遵守'
    ],
    tips: [
      '早朝からの釣行がおすすめ',
      '地元漁師さんから情報収集',
      '潮汐表を必ずチェック'
    ]
  },
  {
    id: 'aichi-gamagori',
    name: '蒲郡竹島周辺',
    prefecture: '愛知県',
    area: 'aichi',
    location: {
      lat: 34.8276,
      lng: 137.2186
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '15分',
      facilities: ['トイレ', 'コンビニ', '釣具店', 'レストラン']
    },
    targetFish: ['aji', 'saba', 'iwashi', 'tai'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'beginner',
    safetyLevel: 'high',
    description: '愛知県蒲郡市の人気観光地。初心者にも優しい釣りスポット。',
    features: [
      '観光地として整備されており安全',
      '竹島への橋からの釣りが可能',
      '周辺施設が充実',
      'ファミリーフィッシングに最適'
    ],
    regulations: [
      '観光客に配慮した釣りを',
      'ライフジャケット着用推奨',
      'ゴミの持ち帰り厳守'
    ],
    tips: [
      'サビキ釣りが効果的',
      '潮の動きを確認してから釣行',
      '観光シーズンは混雑に注意'
    ]
  },
  {
    id: 'aichi-himaka-island',
    name: '日間賀島',
    prefecture: '愛知県',
    area: 'aichi',
    location: {
      lat: 34.6969,
      lng: 136.9444
    },
    accessibility: {
      parking: false,
      publicTransport: true,
      walkFromStation: 'フェリー必須',
      facilities: ['トイレ', '釣具店', '民宿', '食堂']
    },
    targetFish: ['aji', 'saba', 'iwashi', 'tai', 'suzuki'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '愛知県知多半島沖の離島。豊富な魚種と美味しいタコで有名。',
    features: [
      '離島ならではの豊富な魚種',
      'タコ料理が名物',
      '宿泊しての釣りも可能',
      '釣り体験ツアーあり'
    ],
    regulations: [
      'フェリー時刻の確認必須',
      '島のルールを遵守',
      '地元漁師への配慮'
    ],
    tips: [
      'フェリーの最終便に注意',
      '宿で釣り情報を収集',
      '島の釣り体験プランもおすすめ'
    ]
  },
  {
    id: 'mie-toba-bay',
    name: '鳥羽湾周辺',
    prefecture: '三重県',
    area: 'mie',
    location: {
      lat: 34.4835,
      lng: 136.8456
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '10分',
      facilities: ['トイレ', 'コンビニ', '釣具店', '海産物店']
    },
    targetFish: ['aji', 'saba', 'tai', 'suzuki'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '三重県鳥羽市の風光明媚な釣りスポット。伊勢志摩の美しい景色も楽しめる。',
    features: [
      '伊勢志摩の美しい景色',
      '真珠養殖場が近くにある',
      '観光と釣りを両方楽しめる',
      '海女の文化に触れられる'
    ],
    regulations: [
      '養殖施設への配慮',
      '観光地としてのマナー遵守',
      '安全装備の着用'
    ],
    tips: [
      '伊勢エビの時期は特に人気',
      '地元の海産物店で情報収集',
      '観光と合わせて楽しむ'
    ]
  }
];

// エリア情報
export const areas = {
  // 北海道・東北
  hokkaido: { name: '北海道', description: '豊富な海の幸と雄大な自然での海釣り' },
  tohoku: { name: '東北地方全域', description: '三陸海岸をはじめとした豊かな漁場' },
  aomori: { name: '青森県', description: '本州最北端、津軽海峡の豊かな海' },
  miyagi: { name: '宮城県', description: '三陸の恵み豊かな海での釣り' },
  fukushima: { name: '福島県', description: '太平洋側の多様な魚種が楽しめる' },
  
  // 関東
  tokyo: { name: '東京湾', description: '都心からアクセス良好な釣りエリア' },
  kanagawa: { name: '神奈川県', description: '湘南・相模湾の多様な釣り場' },
  chiba: { name: '千葉県', description: '房総半島の豊富な魚種が期待できる' },
  ibaraki: { name: '茨城県', description: '大洗・鹿島灘の良好な釣り場' },
  kanto: { name: '関東地方全域', description: '東京湾から太平洋まで多彩な釣りスポット' },
  
  // 東海・中部
  aichi: { name: '愛知県', description: '日間賀島や竹島など観光と釣りを楽しめる' },
  shizuoka: { name: '静岡県', description: '駿河湾・相模湾の豊かな海での釣り' },
  mie: { name: '三重県', description: '伊勢志摩の美しい海と豊富な魚種' },
  tokai: { name: '東海地方全域', description: '愛知・静岡・三重の海釣りスポット総合' },
  niigata: { name: '新潟県', description: '日本海側の豊かな漁場' },
  ishikawa: { name: '石川県', description: '能登半島の美しい海での釣り体験' },
  
  // 関西
  osaka: { name: '大阪湾', description: '都市近郊の手軽な海釣りスポット' },
  hyogo: { name: '兵庫県', description: '瀬戸内海・日本海両方の釣り場' },
  wakayama: { name: '和歌山県', description: '紀伊半島の黒潮の恵みを受けた海' },
  kansai: { name: '関西地方全域', description: '瀬戸内海から太平洋まで多様な釣り場' },
  
  // 中国・四国
  hiroshima: { name: '広島県', description: '瀬戸内海の穏やかな海での釣り' },
  okayama: { name: '岡山県', description: '瀬戸内の島々での魅力的な釣り体験' },
  kagawa: { name: '香川県', description: '讃岐の美しい海と豊富な魚種' },
  ehime: { name: '愛媛県', description: '瀬戸内海・宇和海の多彩な釣り場' },
  'chugoku-shikoku': { name: '中国・四国全域', description: '瀬戸内海を中心とした温暖な海の釣り' },
  
  // 九州・沖縄
  fukuoka: { name: '福岡県', description: '玄界灘・有明海の多様な釣り場' },
  kumamoto: { name: '熊本県', description: '天草諸島など美しい海での釣り' },
  kagoshima: { name: '鹿児島県', description: '南九州の温暖な海と離島での釣り' },
  okinawa: { name: '沖縄県', description: '亜熱帯の美しい海と独特の魚種' },
  kyushu: { name: '九州・沖縄全域', description: '温暖な海域での年中釣りが楽しめる' }
};

// 安全レベル
export const safetyLevels = {
  high: { name: '高', color: 'green', description: '初心者・家族向け' },
  medium: { name: '中', color: 'yellow', description: '注意が必要' },
  low: { name: '低', color: 'red', description: '経験者向け' }
};

// 参考情報源
export const referencesSources = [
  {
    name: '釣りPlus - 東海の釣り場情報',
    description: '東海地方の釣り場情報を掲載。釣果情報やアクセス情報が参考になります。',
    url: 'https://tsuri-plus.com/tokai/',
    lastUpdated: '2024年'
  },
  {
    name: '各自治体の観光情報サイト',
    description: '各自治体の観光情報サイトで、周辺情報やアクセス情報を確認できます。',
    url: 'https://www.jnto.go.jp/',
    lastUpdated: '2024年'
  },
  {
    name: '釣り具店のWebサイト・ブログ',
    description: '近隣の釣り具店のWebサイトやブログで、最新の釣果情報やおすすめの仕掛けを確認できます。',
    url: 'https://www.fishing-v.jp/',
    lastUpdated: '2024年'
  },
  {
    name: '全国の釣り場ガイド',
    description: '日本全国の海釣りスポット情報を網羅的に掲載。',
    url: 'https://www.tsuribito.co.jp/',
    lastUpdated: '2024年'
  },
  {
    name: '気象庁 - 海の気象情報',
    description: '釣行時の安全確保のための海の気象・潮汐情報。',
    url: 'https://www.jma.go.jp/bosai/marine/',
    lastUpdated: '2024年'
  }
];
