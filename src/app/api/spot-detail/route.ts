import { NextRequest, NextResponse } from 'next/server';
import { getSpotDetails } from '@/lib/gemini';

interface SpotDetailRequest {
  spotName?: string;
  question?: string;
  location?: string;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const spotName = searchParams.get('spotName');
  const question = searchParams.get('question');
  const location = searchParams.get('location');
  
  if (!spotName) {
    return NextResponse.json({ 
      error: 'スポット名が必要です' 
    }, { status: 400 });
  }

  try {
    let response;
    
    if (question) {
      // 特定の質問がある場合の処理
      response = await handleSpecificQuestion(spotName, question);
    } else {
      // 一般的なスポット詳細情報を取得
      response = await getSpotDetails(spotName, location || '');
    }

    return NextResponse.json({
      success: true,
      data: response,
      generatedAt: new Date().toLocaleString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Tokyo'
      })
    });

  } catch (error) {
    console.error('Spot detail API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    
    return NextResponse.json(
      { 
        error: 'スポット詳細情報の取得に失敗しました',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: SpotDetailRequest = await request.json();
    const { spotName, question, location } = body;
    
    if (!spotName) {
      return NextResponse.json({ 
        error: 'スポット名が必要です' 
      }, { status: 400 });
    }

    let response;
    
    if (question) {
      response = await handleSpecificQuestion(spotName, question);
    } else {
      response = await getSpotDetails(spotName, location || '');
    }

    return NextResponse.json({
      success: true,
      data: response,
      generatedAt: new Date().toLocaleString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Tokyo'
      })
    });

  } catch (error) {
    console.error('Spot detail POST API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    
    return NextResponse.json(
      { 
        error: 'スポット詳細情報の取得に失敗しました',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

// 特定の質問に対する回答を生成する関数
async function handleSpecificQuestion(spotName: string, question: string) {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('APIキーが設定されていません');
  }

  const prompt = `
    「${spotName}」での海釣りについて、以下の質問に正確で実用的な情報で回答してください：
    質問: ${question}

    以下の形式のJSONで返してください：
    {
      "spotName": "${spotName}",
      "question": "${question}",
      "answer": "具体的で実践的な回答（実在する情報のみ）",
      "relatedInfo": [
        {
          "title": "関連する具体的な情報",
          "description": "実用的な詳細説明"
        }
      ],
      "recommendedSites": [
        {
          "title": "実在するサイト名",
          "url": "実在するURLのみ記載",
          "description": "そのサイトで得られる具体的な情報",
          "category": "自治体・観光協会・釣り具店・釣り情報サイト等"
        }
      ]
    }

    重要な制約:
    - 実在する情報のみを提供
    - 安全面での注意事項を必ず含める
    - 最新の規則やマナーについても言及
    - 架空のURLや情報は絶対に含めない
  `;

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
    return JSON.parse(jsonMatch[0]);
  }
  
  throw new Error('Invalid response format');
}
