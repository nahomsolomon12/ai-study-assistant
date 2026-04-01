import { streamText, appendResponseMessages } from "ai";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getLanguageModel } from "@/lib/provider";
import { buildStudyPrompt } from "@/lib/prompts/generation";
import fs from "fs";
import path from "path";

function loadMaterials(selectedFiles: string[]): string {
  const materialsDir = path.join(process.cwd(), "study-materials");

  // List all available markdown files
  let availableFiles: string[] = [];
  try {
    availableFiles = fs
      .readdirSync(materialsDir)
      .filter((f) => f.endsWith(".md"));
  } catch {
    return "No study materials found.";
  }

  // Use selected files if provided, otherwise load all
  const filesToLoad =
    selectedFiles.length > 0
      ? selectedFiles.filter((f) => availableFiles.includes(f))
      : availableFiles;

  if (filesToLoad.length === 0) return "No study materials found.";

  return filesToLoad
    .map((filename) => {
      const filePath = path.join(materialsDir, filename);
      const content = fs.readFileSync(filePath, "utf-8");
      const topicName = filename.replace(".md", "").replace(/-/g, " ");
      return `### Topic: ${topicName}\n\n${content}`;
    })
    .join("\n\n---\n\n");
}

export async function POST(req: Request) {
  const {
    messages,
    selectedMaterials = [],
    projectId,
  }: {
    messages: any[];
    selectedMaterials: string[];
    projectId?: string;
  } = await req.json();

  const materialsContext = loadMaterials(selectedMaterials);
  const systemPrompt = buildStudyPrompt(materialsContext);

  const allMessages = [
    { role: "system", content: systemPrompt },
    ...messages,
  ];

  const model = getLanguageModel();

  const result = streamText({
    model,
    messages: allMessages,
    maxTokens: 4096,
    onError: (err: any) => {
      console.error(err);
    },
    onFinish: async ({ response }) => {
      if (projectId) {
        try {
          const session = await getSession();
          if (!session) return;

          const responseMessages = response.messages || [];
          const savedMessages = appendResponseMessages({
            messages: [...messages],
            responseMessages,
          });

          await prisma.project.update({
            where: { id: projectId, userId: session.userId },
            data: { messages: JSON.stringify(savedMessages) },
          });
        } catch (error) {
          console.error("Failed to save project data:", error);
        }
      }
    },
  });

  return result.toDataStreamResponse();
}

export const maxDuration = 120;
