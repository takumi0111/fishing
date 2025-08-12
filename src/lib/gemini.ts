// TypeScript用の型定義
export interface FishingSpot {
  name: string;
  location: string;
  features: string[];
  fish: string[];
  facilities: string[];
  access: string;
  season: string;
  difficulty: number;
  description: string;
  sources: SourceInfo[];
  lastUpdated: string;
}

export interface SourceInfo {
  title: string;
  url: string;
  type: 'official' | 'tackle_shop' | 'fishing_guide' | 'tourism' | 'news' | 'community';
}

export interface GeminiResponse {
  spots: FishingSpot[];
}

export interface SpotDetailResponse {
  spotName: string;
  location: string;
  detailedInfo: {
    description: string;
    features: string[];
    facilities: string[];
    access: string;
    bestTimes: string[];
    targetFish: string[];
    difficulty: number;
    safetyNotes: string[];
    regulations: string[];
    sources: SourceInfo[];
    lastUpdated: string;
  };
}

// 魚種マッピング（検索用）
const fishMapping: Record<string, string> = {
  'aji': 'アジ',
  'saba': 'サバ', 
  'iwashi': 'イワシ',
  'mebaru': 'メバル',
  'kasago': 'カサゴ',
  'kisu': 'キス',
  'tai': 'マダイ',
  'suzuki': 'スズキ',
  'aorika': 'アオリイカ',
  'hirame': 'ヒラメ'
};

// 特定の釣りスポットの参考情報を取得する関数
export async function getSpotSpecificSources(spotName: string, location: string): Promise<SourceInfo[]> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    return [];
  }

  const prompt = `
    「${spotName}」（${location}）という釣りスポットに関する具体的で実在する参考情報源を教えてください。

    以下の順序で実在するWebサイトを検索し、見つかった情報のみを記載してください：
    1. 地元自治体や観光協会の公式サイト
    2. 地域の釣り具店の公式サイト
    3. 港や漁協の公式情報
    4. 実在する釣り情報サイトや地域情報サイト
    5. 施設管理者の公式サイト

    以下の形式のJSONで返してください：
    {
      "sources": [
        {
          "title": "実在するサイト名",
          "url": "実在するURL",
          "type": "official|tackle_shop|fishing_guide|tourism|news|community"
        }
      ]
    }

    ★重要★
    - 実在しない架空のURLは絶対に含めないでください
    - 確実に存在するサイトのみを記載してください
    - 最低1つ、最大5つまでの情報源を提供してください
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      return [];
    }

    // JSONを抽出
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0]);
      return result.sources || [];
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching spot sources:', error);
    return [];
  }
}

// 釣りスポット検索関数
export async function searchFishingSpots(
  area: string, 
  fish: string, 
  startDate: string
): Promise<FishingSpot[]> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('Gemini API key is not configured');
  }

  // 魚種をマッピング
  const fishName = fish ? (fishMapping[fish] || fish) : '';
  
  const prompt = `
    以下の条件に基づいて、具体的な海釣りスポットを3つ推薦してください：

    **検索条件**
    - エリア: ${area || '指定なし'}
    - 釣りたい魚: ${fishName || '指定なし'}
    - 釣行予定日: ${startDate || '指定なし'}

    **回答形式**
    必ず以下のJSON形式で返してください：

    {
      "spots": [
        {
          "name": "具体的な釣り場名",
          "location": "詳細な住所または場所",
          "features": ["特徴1", "特徴2", "特徴3"],
          "fish": ["釣れる魚1", "釣れる魚2", "釣れる魚3"],
          "facilities": ["設備1", "設備2"],
          "access": "アクセス方法の説明",
          "season": "最適な時期",
          "difficulty": 1-5の数値,
          "description": "詳細な説明文",
          "sources": [
            {
              "title": "参考情報のタイトル",
              "url": "https://example.com",
              "type": "official"
            }
          ],
          "lastUpdated": "2024"
        }
      ]
    }

    **重要な指示**
    1. 実在する釣りスポットのみを推薦してください
    2. 初心者にも安全でアクセスしやすい場所を優先してください
    3. 各スポットの難易度は1（超初心者向け）から5（上級者向け）で設定してください
    4. 参考情報は実在するサイトのURLを含めてください
    5. 季節や時期に応じた適切な情報を提供してください
    6. 安全面での注意事項も含めてください
    7. 最新の情報更新年を記載してください
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      throw new Error('No response text received');
    }

    // JSONを抽出して解析
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const result: GeminiResponse = JSON.parse(jsonMatch[0]);
      
      // データの検証
      if (result.spots && Array.isArray(result.spots)) {
        return result.spots.map(spot => ({
          ...spot,
          difficulty: Math.max(1, Math.min(5, spot.difficulty || 2)),
          sources: spot.sources || [],
          lastUpdated: spot.lastUpdated || '2024'
        }));
      }
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error searching fishing spots:', error);
    throw error;
  }
}

// スポット詳細情報を取得する関数
export async function getSpotDetails(
  spotName: string, 
  location: string
): Promise<SpotDetailResponse> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('Gemini API key is not configured');
  }

  const prompt = `
    「${spotName}」（${location}）の釣りスポットについて、詳細な情報を教えてください。

    以下のJSON形式で返してください：

    {
      "spotName": "${spotName}",
      "location": "${location}",
      "detailedInfo": {
        "description": "詳細な説明",
        "features": ["特徴1", "特徴2"],
        "facilities": ["設備1", "設備2"],
        "access": "アクセス方法",
        "bestTimes": ["最適な時間帯1", "最適な時間帯2"],
        "targetFish": ["釣れる魚1", "釣れる魚2"],
        "difficulty": 1-5の数値,
        "safetyNotes": ["安全注意事項1", "安全注意事項2"],
        "regulations": ["ルール1", "ルール2"],
        "sources": [
          {
            "title": "参考情報のタイトル",
            "url": "実在するURL",
            "type": "official"
          }
        ],
        "lastUpdated": "2024"
      }
    }

    **重要**
    - 実在する情報のみを提供してください
    - 安全面の注意事項を必ず含めてください
    - 最新の規則やマナーについても言及してください
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.5,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1536,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      throw new Error('No response text received');
    }

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const result: SpotDetailResponse = JSON.parse(jsonMatch[0]);
      return result;
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error getting spot details:', error);
    throw error;
  }
}

export default {
  searchFishingSpots,
  getSpotDetails,
  getSpotSpecificSources
};
