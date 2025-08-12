import { NextRequest, NextResponse } from 'next/server';
import { getSpotSpecificSources } from '@/lib/gemini';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const spotName = searchParams.get('spotName');
  const location = searchParams.get('location');
  
  if (!spotName) {
    return NextResponse.json({ 
      error: 'スポット名が必要です' 
    }, { status: 400 });
  }

  try {
    const sources = await getSpotSpecificSources(spotName, location || '');
    
    return NextResponse.json({
      success: true,
      data: {
        sources,
        spotName,
        location: location || ''
      },
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
    console.error('参考情報取得エラー:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    
    return NextResponse.json({ 
      error: '参考情報の取得中にエラーが発生しました',
      details: errorMessage
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { spotName, location } = body;
    
    if (!spotName) {
      return NextResponse.json({ 
        error: 'スポット名が必要です' 
      }, { status: 400 });
    }

    const sources = await getSpotSpecificSources(spotName, location || '');
    
    return NextResponse.json({
      success: true,
      data: {
        sources,
        spotName,
        location: location || ''
      },
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
    console.error('参考情報POST取得エラー:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    
    return NextResponse.json({ 
      error: '参考情報の取得中にエラーが発生しました',
      details: errorMessage
    }, { status: 500 });
  }
}
