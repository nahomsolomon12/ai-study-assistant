import { createGroq } from "@ai-sdk/groq";

const MODEL = "llama-3.3-70b-versatile";

export function getLanguageModel() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    throw new Error("GROQ_API_KEY is not set. Please add it to your .env file.");
  }

  const groq = createGroq({ apiKey });
  return groq(MODEL);
}
