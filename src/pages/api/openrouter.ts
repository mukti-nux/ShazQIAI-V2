// pages/api/openrouter.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { callOpenRouter } from "./../../../utils/openrouter";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { messages, model } = req.body;

  try {
    const data = await callOpenRouter(messages, model);
    return res.status(200).json(data);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Unknown error" });
  }
}
