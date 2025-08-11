export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    return Response.json({ error: 'API key not found' });
  }

  // テスト用の複数のモデルを試行
  const models = [
    'gemini-pro',
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'text-bison-001'
  ];
  
  const results = [];
  
  for (const model of models) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: 'Hello, this is a test.' }]
          }]
        })
      });

      results.push({
        model,
        status: response.status,
        success: response.ok,
        error: response.ok ? null : await response.text()
      });

      if (response.ok) {
        break; // 成功したモデルが見つかったら停止
      }
    } catch (error) {
      results.push({
        model,
        status: 'error',
        success: false,
        error: error.message
      });
    }
  }

  return Response.json({ 
    apiKeyLength: apiKey.length,
    results 
  });
}
