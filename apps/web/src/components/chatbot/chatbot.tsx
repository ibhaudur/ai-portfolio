"use client";

import { useState } from "react";
import {
  Bot,
  Send,
  X,
  Sparkles,
  User,
} from "lucide-react";
import { postChatUrl } from "@/service/apiUrls";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "Where did Ibhaudur study?",
  "Where has Ibhaudur worked?",
  "What technologies does he know?",
  "Tell me about his projects",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! 👋 I'm Ibhaudur's AI portfolio assistant. Ask me anything about his experience, skills, education, or projects.",
    },
  ]);

  const sendMessage = async (question?: string) => {
  const message = (question ?? input).trim();

  if (!message || isLoading) return;

  const userMessage: Message = {
    id: Date.now(),
    role: "user",
    content: message,
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setIsLoading(true);

  try {
    const apiUrl = process.env.NEXT_PUBLIC_AI_API_URL;

    console.log("AI API URL:", apiUrl);

    const response = await fetch(`${apiUrl}/api/v1/${postChatUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: message,
      }),
    });

    console.log("Status:", response.status);

    const responseText = await response.text();

    console.log("Response:", responseText);

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${responseText}`
      );
    }

    const data = JSON.parse(responseText);

    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: "assistant",
      content: data.answer,
    };

    setMessages((prev) => [...prev, assistantMessage]);
  } catch (error) {
    console.error("Chatbot error:", error);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Sorry, I'm unable to connect to the AI assistant right now. Please try again later.",
      },
    ]);
  } finally {
    setIsLoading(false);
  }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950 sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between bg-black px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Bot size={22} />
              </div>

              <div>
                <h3 className="font-semibold">Ibhaudur's AI</h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  AI Portfolio Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 cursor-pointer transition hover:bg-white/10"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "rounded-br-md bg-black text-white"
                      : "rounded-bl-md bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-100"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {/* Loading */}
            {isLoading && (
              <div className="flex gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <Bot size={16} />
                </div>

                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm dark:bg-gray-800">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {/* Suggested Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-2">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Sparkles size={14} />
                  Try asking
                </div>

                <div className="space-y-2">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="block w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-left text-xs text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-950"
          >
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-gray-400 dark:border-gray-700 dark:bg-gray-900">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-gray-400">
              Powered by AI • Ibhaudur Rahman's Portfolio
            </p>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 cursor-pointer right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-amber-300 shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl sm:right-6"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={24} /> : <Bot size={25} />}
      </button>
    </>
  );
}