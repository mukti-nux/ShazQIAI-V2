// pages/index.tsx
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await fetch("/api/openrouter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "deepseek-ai/deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: input },
        ],
      }),
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || "No response");
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">ShazQI AI v2</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tanyakan sesuatu..."
        className="border px-4 py-2 rounded w-full mb-4"
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Kirim
      </button>
      <div className="mt-4 whitespace-pre-wrap">{response}</div>
    </main>
  );
}
