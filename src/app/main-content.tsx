"use client";

import { useState } from "react";
import { ChatProvider } from "@/lib/contexts/chat-context";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { MaterialSelector } from "@/components/MaterialSelector";
import { HeaderActions } from "@/components/HeaderActions";
import { Message } from "ai";

interface MainContentProps {
  user?: {
    id: string;
    email: string;
  } | null;
  project?: {
    id: string;
    name: string;
    messages: Message[];
    createdAt: Date;
    updatedAt: Date;
  };
  introQuote?: {
    quote: string;
    author: string;
  };
}

export function MainContent({ user, project, introQuote }: MainContentProps) {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const existingMessages = project?.messages ?? [];

  const introMessage: Message | null =
    introQuote && existingMessages.length === 0
      ? {
          id: "intro",
          role: "assistant",
          content: `Hi! I'm your **AI Study Assistant**, powered by Llama 3.3 70B.\n\nBefore we dive in, here's something to keep you going:\n\n> "${introQuote.quote}"\n>\n> — ${introQuote.author}\n\nSelect your study materials above, then ask me anything — I can explain concepts, answer questions, or quiz you.`,
        }
      : null;

  const initialMessages = introMessage
    ? [introMessage, ...existingMessages]
    : existingMessages;

  return (
    <ChatProvider
      projectId={project?.id}
      initialMessages={initialMessages}
      selectedMaterials={selectedMaterials}
    >
      <div className="h-screen w-screen overflow-hidden bg-neutral-50 flex flex-col">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-neutral-200 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-neutral-900 tracking-tight">
              AI Study Assistant
            </span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
              Beta
            </span>
          </div>
          <HeaderActions user={user} projectId={project?.id} />
        </header>

        {/* Material Selector */}
        <MaterialSelector
          selected={selectedMaterials}
          onChange={setSelectedMaterials}
        />

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden bg-white">
          <ChatInterface />
        </div>
      </div>
    </ChatProvider>
  );
}
