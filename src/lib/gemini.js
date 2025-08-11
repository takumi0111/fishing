// 特定の釣りスポットの参考情報を取得する関数
async function getSpotSpecificSources(spotName, location) {
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
          "title": "サイト名（実在する場合のみ）",
          "description": "このサイトで得られる具体的な情報",
          "url": "https://実在するURL",
          "category": "自治体・観光協会・釣り具店・港湾施設・釣り情報サイト等",
          "reliability": "高・中・低"
        }
      ]
    }
    
    厳格な制約:
    - 実在しないURLは絶対に含めないでください
    - 推測や仮想のURLは一切記載しないでください
    - 不確実な場合は空の配列を返してください
    - URLが実在するかどうか確信が持てない場合は含めないでください
    - 最大3つまでの高品質な情報源のみ記載してください
    - 地元の具体的な情報を優先してください
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.1, // より正確な結果のため低く設定
          maxOutputTokens: 1500,
        }
      })
    });

    if (!response.ok) {
      console.error('Gemini API error for spot sources:', response.statusText);
      return [];
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return [];
    }

    try {
      const parsed = JSON.parse(text.replace(/```json\n?|\n?```/g, ''));
      const sources = parsed.sources || [];
      
      // どんな結果でも即座に返す（フィルタリングはしない）
      return sources;
      
    } catch (parseError) {
      console.error('Failed to parse spot sources JSON:', parseError);
      return [];
    }

  } catch (error) {
    console.error('Error fetching spot specific sources:', error);
    return [];
  }
}

// Gemini API を使用して釣りスポット情報を取得する関数
export async function getFishingSpotRecommendations(area, fish, startDate) {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('Gemini API key is not configured');
  }

  // 日付から季節を判定する関数
  const getSeasonFromDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // 0-indexed to 1-indexed
    
    if (month >= 3 && month <= 5) return '春';
    if (month >= 6 && month <= 8) return '夏';
    if (month >= 9 && month <= 11) return '秋';
    return '冬';
  };

  // プロンプトを作成
  let prompt = "初心者向けの海釣りスポットをおすすめしてください。";
  
  if (area) {
    const areaNames = {
      // 北海道・東北
      'hokkaido': '北海道',
      'tohoku': '東北地方（青森県・岩手県・宮城県・秋田県・山形県・福島県）',
      'aomori': '青森県',
      'miyagi': '宮城県',
      'fukushima': '福島県',
      
      // 関東
      'tokyo': '東京湾',
      'kanagawa': '神奈川県',
      'chiba': '千葉県',
      'ibaraki': '茨城県',
      'kanto': '関東地方（東京・神奈川・千葉・茨城・埼玉・群馬・栃木）',
      
      // 東海・中部
      'aichi': '愛知県',
      'shizuoka': '静岡県',
      'mie': '三重県',
      'tokai': '東海地方（愛知県・静岡県・三重県・岐阜県）',
      'niigata': '新潟県',
      'ishikawa': '石川県',
      
      // 関西
      'osaka': '大阪湾',
      'hyogo': '兵庫県',
      'wakayama': '和歌山県',
      'kansai': '関西地方（大阪・兵庫・京都・奈良・滋賀・和歌山）',
      
      // 中国・四国
      'hiroshima': '広島県',
      'okayama': '岡山県',
      'kagawa': '香川県',
      'ehime': '愛媛県',
      'chugoku-shikoku': '中国・四国地方（広島・岡山・鳥取・島根・山口・香川・愛媛・徳島・高知）',
      
      // 九州・沖縄
      'fukuoka': '福岡県',
      'kumamoto': '熊本県',
      'kagoshima': '鹿児島県',
      'okinawa': '沖縄県',
      'kyushu': '九州・沖縄地方（福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島・沖縄）'
    };
    prompt += `エリア: ${areaNames[area] || area}で、`;
  }
  
  if (fish) {
    const fishNames = {
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
    prompt += `${fishNames[fish] || fish}を狙える場所で、`;
  }
  
  // 日付指定がある場合の処理
  if (startDate) {
    const season = getSeasonFromDate(startDate);
    const dateFormatted = new Date(startDate).toLocaleDateString('ja-JP');
    prompt += `${dateFormatted}頃（${season}）に適した、`;
  }
  
  prompt += `
    必須: レスポンスは以下の形式のJSONで返してください：
    {
      "recommendations": [
        {
          "name": "スポット名",
          "location": "詳しい場所",
          "targetFish": ["対象魚種"],
          "difficulty": "初心者/中級者/上級者",
          "description": "詳細説明",
          "tips": "釣りのコツ",
          "facilities": "周辺施設情報",
          "access": "アクセス方法",
          "safetyInfo": "安全上の注意点"
        }
      ],
      "sources": [
        {
          "title": "参考サイト名",
          "description": "サイトの正確な説明（実在する場合のみ）",
          "url": "https://example.com（実在するURLのみ記載。不明な場合は含めない）",
          "lastUpdated": "更新年（例：2024年）"
        }
      ]
    }

    重要な注意事項:
    - 実在しない釣りスポットや架空の情報を作成しないでください
    - 参考情報源には実際に存在するサイトのみを記載してください
    - URLが不明または確証がない場合は"url"フィールドにnullを設定するか、フィールド自体を含めないでください
    - 曖昧な情報よりも、確実に正確な情報のみを提供してください
    - 実在する地元の釣り具店、自治体の観光サイト、実在する釣り情報サイトのみを参考にしてください
    - 釣りスポットの安全情報や規則は正確に記載してください
    - 存在しないWebサイトのURLを作成しないでください

最低3つ以上のスポットを提案し、初心者が安全に楽しめる場所を中心に選んでください。
情報源については、確実に存在するもののみを記載し、URLの正確性に自信がない場合は含めないでください。`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0]) {
      throw new Error('No response from Gemini API');
    }

    const responseText = data.candidates[0].content.parts[0].text;
    
    // JSONレスポンスを解析
    try {
      // JSONの開始と終了を見つける
      const jsonStart = responseText.indexOf('{');
      const jsonEnd = responseText.lastIndexOf('}') + 1;
      
      if (jsonStart === -1 || jsonEnd === 0) {
        // JSONが見つからない場合は、テキストをパースして構造化
        return parseTextResponse(responseText);
      }
      
      const jsonString = responseText.substring(jsonStart, jsonEnd);
      return JSON.parse(jsonString);
    } catch (parseError) {
      console.error('JSON parsing failed:', parseError);
      // JSONパースに失敗した場合は、テキストレスポンスを構造化して返す
      return parseTextResponse(responseText);
    }
  } catch (error) {
    console.error('Gemini API request failed:', error);
    throw error;
  }
}

// テキストレスポンスを構造化する補助関数
function parseTextResponse(text) {
  return {
    recommendations: [{
      name: "AIが提案する釣りスポット",
      location: "詳細情報をご確認ください",
      targetFish: ["提案された魚種"],
      difficulty: "初心者",
      accessInfo: text.substring(0, 200) + "...",
      facilities: ["情報取得中"],
      bestTime: "朝・夕方",
      tips: text,
      safety: "安全第一で釣りを楽しんでください",
      tackle: "サビキ釣りセットがおすすめ"
    }],
    sources: [{
      title: "Gemini AI 生成情報",
      url: "",
      lastUpdated: "2025年",
      description: "AIによって生成された釣りスポット情報"
    }],
    generatedAt: new Date().toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    disclaimer: "この情報はAIによって生成されました。実際に釣行される際は、現地の最新情報をご確認ください。"
  };
}

export { getSpotSpecificSources };
