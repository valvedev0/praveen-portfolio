const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Server is missing GEMINI_API_KEY."
    });
  }

  const body = typeof req.body === "string"
    ? safeJsonParse(req.body)
    : (req.body || {});

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  const systemInstruction = typeof body.systemInstruction === "string"
    ? body.systemInstruction.trim()
    : "";

  if (!prompt || !systemInstruction) {
    return res.status(400).json({
      error: "Both prompt and systemInstruction are required."
    });
  }

  try {
    const geminiResponse = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        }
      })
    });

    const rawText = await geminiResponse.text();
    let data = null;

    try {
      data = rawText ? JSON.parse(rawText) : null;
    } catch {
      data = null;
    }

    if (!geminiResponse.ok) {
      return res.status(geminiResponse.status).json({
        error: data?.error?.message || `Gemini API request failed with status ${geminiResponse.status}.`
      });
    }

    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim();

    return res.status(200).json({
      text: text || ""
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Unexpected server error."
    });
  }
};

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}
