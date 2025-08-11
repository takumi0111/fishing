import { getFishingSpotRecommendations } from '@/lib/gemini';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const area = searchParams.get('area');
    const fish = searchParams.get('fish');
    const startDate = searchParams.get('startDate');

    // パラメータの検証
    if (!area && !fish && !startDate) {
      return Response.json(
        { error: '検索条件を最低1つは指定してください' },
        { status: 400 }
      );
    }

    // Gemini APIから釣りスポット情報を取得
    const recommendations = await getFishingSpotRecommendations(area, fish, startDate);

    // 現在時刻を追加
    const currentTime = new Date().toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return Response.json({
      success: true,
      data: {
        ...recommendations,
        generatedAt: currentTime
      },
      searchParams: { area, fish, startDate }
    });

  } catch (error) {
    console.error('Search API error:', error);
    
    return Response.json(
      { 
        error: '釣りスポット情報の取得に失敗しました',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { area, fish, season } = body;

    // POSTでも同様の処理
    const recommendations = await getFishingSpotRecommendations(area, fish, season);

    // 現在時刻を追加
    const currentTime = new Date().toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return Response.json({
      success: true,
      data: {
        ...recommendations,
        generatedAt: currentTime
      },
      searchParams: { area, fish, season }
    });

  } catch (error) {
    console.error('Search API POST error:', error);
    
    return Response.json(
      { 
        error: '釣りスポット情報の取得に失敗しました',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
