export async function callOpenRouter(messages: any, model: string) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://shaz-qiai-v2.vercel.app/" // atau domain kamu
    },
    body: JSON.stringify({
      model,
      messages
    })
  });

  if (!response.ok) {
    const errorBody = await response.text(); // untuk log detail errornya
    console.error("OpenRouter Error Body:", errorBody);
    throw new Error(`OpenRouter Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
