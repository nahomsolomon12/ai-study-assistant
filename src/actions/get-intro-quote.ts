"use server";

import fs from "fs";
import path from "path";

export interface IntroQuote {
  quote: string;
  author: string;
}

export async function getIntroQuote(): Promise<IntroQuote> {
  const filePath = path.join(process.cwd(), "quotes.json");
  const quotes: IntroQuote[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return quotes[Math.floor(Math.random() * quotes.length)];
}
