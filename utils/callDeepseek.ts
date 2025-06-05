export async function callDeepSeek(messages: any[], model: string) {
  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({ model, messages }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("DeepSeek Error: " + error);
  }

  return res.json();
}
