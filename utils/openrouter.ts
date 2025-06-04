// utils/openrouter.ts
export async function callOpenRouter(messages: any[], model = "deepseek-chat") {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://shaz-qiai-v2.vercel.app/",
      "X-Title": "ShazQI AI v2"
    },
    body: JSON.stringify({
      model,
      messages,
    }),
  });

  if (!res.ok) {
    throw new Error(`OpenRouter Error: ${res.statusText}`);
  }

  return res.json();
}
