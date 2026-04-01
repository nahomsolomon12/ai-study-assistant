import fs from "fs";
import path from "path";

export async function GET() {
  const materialsDir = path.join(process.cwd(), "study-materials");

  try {
    const files = fs
      .readdirSync(materialsDir)
      .filter((f) => f.endsWith(".md"))
      .map((filename) => ({
        filename,
        label: filename
          .replace(".md", "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      }));

    return Response.json({ files });
  } catch {
    return Response.json({ files: [] });
  }
}
