import { getSpotSpecificSources } from '@/lib/gemini';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const spotName = searchParams.get('spotName');
  const location = searchParams.get('location');
  
  if (!spotName) {
    return Response.json({ 
      error: 'スポット名が必要です' 
    }, { status: 400 });
  }

  try {
    const sources = await getSpotSpecificSources(spotName, location || '');
    
    return Response.json({
      success: true,
      sources
    });

  } catch (error) {
    console.error('参考情報取得エラー:', error);
    return Response.json({ 
      error: '参考情報の取得中にエラーが発生しました' 
    }, { status: 500 });
  }
}
