"use client";

import { createContext, useContext, ReactNode } from "react";
import { useChat as useAIChat } from "@ai-sdk/react";
import { Message } from "ai";

interface ChatContextProps {
  projectId?: string;
  initialMessages?: Message[];
  selectedMaterials: string[];
}

interface ChatContextType {
  messages: Message[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: string;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({
  children,
  projectId,
  initialMessages = [],
  selectedMaterials,
}: ChatContextProps & { children: ReactNode }) {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useAIChat({
      api: "/api/chat",
      initialMessages,
      body: {
        selectedMaterials,
        projectId,
      },
    });

  return (
    <ChatContext.Provider
      value={{ messages, input, handleInputChange, handleSubmit, status }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
