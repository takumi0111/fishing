// 釣りスポットデータの型定義
export interface Location {
  lat: number;
  lng: number;
}

export interface Accessibility {
  parking: boolean;
  publicTransport: boolean;
  walkFromStation: string;
  facilities: string[];
}

export interface FishingSpot {
  id: string;
  name: string;
  prefecture: string;
  area: 'tokyo' | 'kanagawa' | 'chiba' | 'saitama' | 'ibaraki';
  location: Location;
  accessibility: Accessibility;
  targetFish: string[];
  bestSeason: ('spring' | 'summer' | 'autumn' | 'winter')[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  safetyLevel: 'high' | 'medium' | 'low';
  description: string;
  features: string[];
  regulations: string[];
  tips: string[];
  contact?: string;
  website?: string;
  lastUpdated?: string;
}

export type AreaKey = 'tokyo' | 'kanagawa' | 'chiba' | 'saitama' | 'ibaraki';

export interface AreaInfo {
  name: string;
  description: string;
  features: string[];
}

// 釣りスポットデータ（関東近郊）
export const fishingSpots: FishingSpot[] = [
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
    ],
    lastUpdated: '2024'
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
    ],
    lastUpdated: '2024'
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
      '釣り具レンタルあり'
    ],
    regulations: [
      '指定エリアでのみ釣り可能',
      '夜間釣り禁止',
      'バーベキュー・火気使用禁止'
    ],
    tips: [
      'サビキ釣りがメイン',
      '干潮時は釣りにくい',
      '土日は講習会をチェック'
    ],
    lastUpdated: '2024'
  },
  {
    id: 'kanagawa-enoshima',
    name: '江ノ島西浜',
    prefecture: '神奈川県',
    area: 'kanagawa',
    location: {
      lat: 35.3017,
      lng: 139.4824
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '12分',
      facilities: ['トイレ', 'コンビニ', '海の家（夏季）']
    },
    targetFish: ['aji', 'iwashi', 'kisu', 'tai'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '湘南の代表的な釣りスポット。投げ釣りとサビキ釣りが楽しめる。',
    features: [
      '観光地として有名',
      '投げ釣りでキス狙い',
      '景色が美しい',
      '夜釣りも可能'
    ],
    regulations: [
      '海水浴場開設期間は釣り禁止エリアあり',
      'ライフジャケット着用推奨',
      'ゴミの持ち帰り厳守'
    ],
    tips: [
      '投げ釣りは早朝がおすすめ',
      '海水浴シーズンは避ける',
      '潮通しの良いポイントを狙う'
    ],
    lastUpdated: '2024'
  },
  {
    id: 'tokyo-kasai',
    name: '葛西臨海公園',
    prefecture: '東京都',
    area: 'tokyo',
    location: {
      lat: 35.6372,
      lng: 139.8598
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '3分',
      facilities: ['トイレ', 'コンビニ', '自販機', 'レストラン']
    },
    targetFish: ['aji', 'saba', 'iwashi', 'kasago'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'beginner',
    safetyLevel: 'high',
    description: '東京湾の人気スポット。水族館も隣接し家族で楽しめる。',
    features: [
      '水族館が隣接',
      '家族向け施設充実',
      '安全な護岸',
      '電車でのアクセス良好'
    ],
    regulations: [
      '夜間釣り禁止（日没まで）',
      '投げ釣り禁止',
      '指定エリアでのみ釣り可能'
    ],
    tips: [
      'サビキ釣りがメイン',
      '潮の良い日を狙う',
      '水族館とセットで楽しむ'
    ],
    lastUpdated: '2024'
  },
  {
    id: 'chiba-futtsu',
    name: '富津海岸',
    prefecture: '千葉県',
    area: 'chiba',
    location: {
      lat: 35.2794,
      lng: 139.8441
    },
    accessibility: {
      parking: true,
      publicTransport: false,
      walkFromStation: '車必須',
      facilities: ['トイレ', '自販機']
    },
    targetFish: ['kisu', 'aji', 'saba', 'tai'],
    bestSeason: ['spring', 'summer', 'autumn'],
    difficulty: 'intermediate',
    safetyLevel: 'medium',
    description: '投げ釣りのメッカ。キスの好ポイントとして有名。',
    features: [
      'キス釣りで有名',
      '広大な砂浜',
      '遠投が可能',
      '夜釣りも人気'
    ],
    regulations: [
      '車の砂浜進入禁止エリアあり',
      '海水浴場との共存に配慮',
      '夜間は照明を適切に使用'
    ],
    tips: [
      '投げ釣りがメイン',
      'キス狙いは砂地を選ぶ',
      '潮汐表を確認してから行く'
    ],
    lastUpdated: '2024'
  },
  {
    id: 'saitama-arakawa',
    name: '荒川河口',
    prefecture: '埼玉県',
    area: 'saitama',
    location: {
      lat: 35.7892,
      lng: 139.7847
    },
    accessibility: {
      parking: true,
      publicTransport: true,
      walkFromStation: '20分',
      facilities: ['トイレ']
    },
    targetFish: ['suzuki', 'aji', 'kasago'],
    bestSeason: ['summer', 'autumn'],
    difficulty: 'advanced',
    safetyLevel: 'low',
    description: 'シーバス狙いの上級者向けスポット。流れが早く注意が必要。',
    features: [
      'シーバス（スズキ）の好ポイント',
      'ルアー釣りがメイン',
      '河口特有の地形',
      'ベテランアングラー向け'
    ],
    regulations: [
      'ライフジャケット着用必須',
      '単独釣行は避ける',
      '増水時は立入禁止'
    ],
    tips: [
      'ルアー釣り専門',
      '潮の動きを読む技術が必要',
      '安全装備は万全に'
    ],
    lastUpdated: '2024'
  }
];

// エリア情報
export const areaInfo: Record<AreaKey, AreaInfo> = {
  tokyo: {
    name: '東京都',
    description: '都心からアクセスしやすい釣りスポットが充実',
    features: ['電車でアクセス可能', '初心者向けスポット多数', '施設充実']
  },
  kanagawa: {
    name: '神奈川県',
    description: '多様な釣りスタイルが楽しめる人気エリア',
    features: ['魚種豊富', '観光地との併用可能', '港湾部と海岸部']
  },
  chiba: {
    name: '千葉県',
    description: '投げ釣りのメッカ、砂浜での釣りが人気',
    features: ['投げ釣り人気', '砂浜スポット', 'キス釣り有名']
  },
  saitama: {
    name: '埼玉県',
    description: '河川での釣りが中心、シーバス狙いが人気',
    features: ['河川釣り', 'シーバス人気', '上級者向け']
  },
  ibaraki: {
    name: '茨城県',
    description: '太平洋に面した本格的な海釣りスポット',
    features: ['太平洋の海釣り', '大型魚期待', '自然豊か']
  }
};

// スポット検索用のフィルター関数
export function filterSpotsByArea(area: AreaKey): FishingSpot[] {
  return fishingSpots.filter(spot => spot.area === area);
}

export function filterSpotsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): FishingSpot[] {
  return fishingSpots.filter(spot => spot.difficulty === difficulty);
}

export function filterSpotsByFish(fishId: string): FishingSpot[] {
  return fishingSpots.filter(spot => spot.targetFish.includes(fishId));
}

export function filterSpotsBySeason(season: 'spring' | 'summer' | 'autumn' | 'winter'): FishingSpot[] {
  return fishingSpots.filter(spot => spot.bestSeason.includes(season));
}

// スポット詳細取得
export function getSpotById(id: string): FishingSpot | undefined {
  return fishingSpots.find(spot => spot.id === id);
}
