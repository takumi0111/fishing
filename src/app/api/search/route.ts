import { NextRequest, NextResponse } from 'next/server';
import { searchFishingSpots } from '@/lib/gemini';

// GET リクエストの処理
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const area = searchParams.get('area');
    const fish = searchParams.get('fish');
    const startDate = searchParams.get('startDate');

    // パラメータの検証
    if (!area && !fish && !startDate) {
      return NextResponse.json(
        { error: '検索条件を最低1つは指定してください' },
        { status: 400 }
      );
    }

    // Gemini APIから釣りスポット情報を取得
    const recommendations = await searchFishingSpots(
      area || '', 
      fish || '', 
      startDate || ''
    );

    // 現在時刻を追加
    const currentTime = new Date().toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Tokyo'
    });

    return NextResponse.json({
      success: true,
      data: {
        spots: recommendations,
        generatedAt: currentTime
      },
      searchParams: { area, fish, startDate }
    });

  } catch (error) {
    console.error('Search API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    
    return NextResponse.json(
      { 
        error: '釣りスポット情報の取得に失敗しました',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}

// POST リクエストの処理
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { area, fish, season } = body;

    // POSTでも同様の処理
    const recommendations = await searchFishingSpots(
      area || '', 
      fish || '', 
      season || ''
    );

    // 現在時刻を追加
    const currentTime = new Date().toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Tokyo'
    });

    return NextResponse.json({
      success: true,
      data: {
        spots: recommendations,
        generatedAt: currentTime
      },
      searchParams: { area, fish, season }
    });

  } catch (error) {
    console.error('Search API POST error:', error);
    
    const errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    
    return NextResponse.json(
      { 
        error: '釣りスポット情報の取得に失敗しました',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
