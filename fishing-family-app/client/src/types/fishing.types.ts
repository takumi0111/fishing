// 釣りスポットの型定義
export interface FishingSpot {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    prefecture: string;
    city: string;
  };
  type: 'pier' | 'harbor' | 'beach' | 'breakwater';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  facilities: {
    parking: boolean;
    restroom: boolean;
    convenience: boolean;
    restaurant: boolean;
    lifeJacketRental: boolean;
  };
  fishSpecies: string[];
  seasonalFish: {
    spring: string[];
    summer: string[];
    autumn: string[];
    winter: string[];
  };
  bestTimes: string[];
  rules: {
    needsPermit: boolean;
    sizeLimits: { [fishType: string]: number };
    prohibitedAreas: string[];
    lifeJacketRequired: boolean;
  };
  safetyNotes: string[];
  accessInfo: {
    byTrain: string;
    byCar: string;
    walkingTime: number;
  };
  rating: number;
  reviewCount: number;
  images: string[];
  lastUpdated: string;
}

// 魚の型定義
export interface Fish {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  size: {
    min: number;
    max: number;
    average: number;
  };
  season: ('spring' | 'summer' | 'autumn' | 'winter')[];
  bestTimes: string[];
  habitat: string[];
  bait: string[];
  tackle: {
    rod: string;
    reel: string;
    line: string;
    hook: string;
    weight: string;
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cookingMethods: string[];
  image: string;
  description: string;
}

// 天気・潮汐情報の型定義
export interface WeatherInfo {
  temperature: number;
  weather: string;
  windSpeed: number;
  windDirection: string;
  waveHeight: number;
  visibility: number;
  humidity: number;
  pressure: number;
}

export interface TideInfo {
  highTide: { time: string; height: number }[];
  lowTide: { time: string; height: number }[];
  currentTide: number;
  nextTide: { type: 'high' | 'low'; time: string; height: number };
}

// 検索フィルターの型定義
export interface SearchFilters {
  location?: {
    lat: number;
    lng: number;
    radius: number;
  };
  targetFish?: string[];
  difficulty?: ('beginner' | 'intermediate' | 'advanced')[];
  spotType?: ('pier' | 'harbor' | 'beach' | 'breakwater')[];
  facilities?: string[];
  season?: 'spring' | 'summer' | 'autumn' | 'winter';
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'night';
}

// 釣行記録の型定義
export interface FishingRecord {
  id: string;
  userId: string;
  spotId: string;
  date: string;
  duration: number;
  weather: WeatherInfo;
  tide: TideInfo;
  catches: {
    fishId: string;
    count: number;
    sizes: number[];
  }[];
  tackle: string[];
  bait: string[];
  notes: string;
  photos: string[];
  rating: number;
}

// ユーザー情報の型定義
export interface User {
  id: string;
  name: string;
  email: string;
  experience: 'beginner' | 'intermediate' | 'advanced';
  preferences: {
    targetFish: string[];
    preferredSpotTypes: string[];
    maxTravelDistance: number;
  };
  favoriteSpots: string[];
  fishingRecords: string[];
  createdAt: string;
}

// APIレスポンスの型定義
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// 位置情報の型定義
export interface Location {
  lat: number;
  lng: number;
}

// 装備・道具の型定義
export interface Equipment {
  id: string;
  name: string;
  category: 'rod' | 'reel' | 'line' | 'hook' | 'weight' | 'bait' | 'accessory';
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  price: {
    min: number;
    max: number;
  };
  image: string;
  targetFish: string[];
  pros: string[];
  cons: string[];
}
