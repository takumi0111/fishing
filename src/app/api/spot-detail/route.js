export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const spotName = searchParams.get('spotName');
  const question = searchParams.get('question');
  
  if (!spotName) {
    return Response.json({ 
      error: 'スポット名が必要です' 
    }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  if (!apiKey) {
    return Response.json({ 
      error: 'APIキーが設定されていません' 
    }, { status: 500 });
  }

  try {
    let prompt;
    if (question) {
      // 特定の質問がある場合
      prompt = `
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
        - 「○○の釣り情報についてまとめてあるサイトを教えて」等の質問には、実在する具体的なサイトを紹介
        - URLは実在するもののみ記載（不明な場合は空文字で説明のみ）
        - 自治体の観光サイト、地元釣り具店、信頼できる釣り情報サイトを優先
        - 憶測や不確実な情報は含めない
        - 回答は上記のJSONフォーマットのみで、追加の説明文は一切含めないこと
      `;
    } else {
      // 一般的な情報を取得
      prompt = `
        「${spotName}」での海釣りについて、正確で具体的な情報を提供してください。

        以下の形式のJSONで返してください：
        {
          "spotName": "${spotName}",
          "overview": "このスポットの特徴や魅力を具体的に説明",
          "bestSeasons": ["実際に釣果の良い具体的な時期"],
          "targetFish": ["実際に釣れる魚種の具体名"],
          "facilities": ["実際の駐車場の詳細（台数、料金）", "トイレの有無と場所", "その他実在する設備"],
          "access": "具体的なアクセス方法（駅からの距離、所要時間、道順）",
          "tips": ["実践的で具体的な釣りのコツやテクニック"],
          "safetyNotes": ["このスポット特有の安全上の注意事項"],
          "recommendedSites": [
            {
              "title": "実在する参考サイト名",
              "url": "実在するURLのみ記載", 
              "description": "そのサイトの内容説明",
              "category": "自治体・観光協会・釣り具店・釣り情報サイト等"
            }
          ]
        }

        重要な制約:
        - 実在する具体的な情報のみを提供
        - 設備については「駐車場（無料・30台）」「水洗トイレあり（釣り場から徒歩2分）」のような具体性
        - アクセスは「JR○○駅から徒歩15分」「車で○○ICから20分」のような具体的な情報
        - URLは実在するもののみ記載（不明な場合は空文字）
        - 地元自治体、観光協会、釣り具店のサイトを優先
        - 回答は上記のJSONフォーマットのみで、追加の説明文は一切含めないこと
      `;
    }

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
          temperature: 0.3,
          maxOutputTokens: 2000,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error for spot detail:', response.statusText, errorText);
      return Response.json({ 
        error: `APIエラー: ${response.status} - ${response.statusText}` 
      }, { status: 500 });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return Response.json({ 
        error: 'レスポンスが空でした' 
      }, { status: 500 });
    }

    try {
      // JSONコードブロックとマークダウンを削除し、JSONのみを抽出
      let cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
      
      // **注意:**等の追加説明文がある場合は、JSONの終わりまでを抽出
      const jsonEndIndex = cleanText.lastIndexOf('}');
      if (jsonEndIndex !== -1) {
        cleanText = cleanText.substring(0, jsonEndIndex + 1);
      }
      
      const jsonData = JSON.parse(cleanText);
      
      return Response.json({
        success: true,
        data: jsonData
      });

    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return Response.json({ 
        error: 'レスポンスの解析に失敗しました',
        rawResponse: text 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('スポット詳細取得エラー:', error);
    return Response.json({ 
      error: 'スポット詳細の取得中にエラーが発生しました' 
    }, { status: 500 });
  }
}
