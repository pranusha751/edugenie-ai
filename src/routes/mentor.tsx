import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { ArrowLeft, Mic, Send, Sparkles } from "lucide-react";
import { getUser } from "@/lib/auth-utils";

export const Route = createFileRoute("/mentor")({
  component: Mentor,
});

type Msg = { role: "ai" | "user"; text: string };

const suggestions = [
  "Explain pointers in C",
  "Reverse linked list in Python",
  "Java vs C++ OOP",
  "Debug my code",
  "Time complexity of quicksort",
];

function Mentor() {
  const navigate = useNavigate();
  const user = getUser();
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: `Hey ${user.name}! 👋 I'm Genie — your B.Tech AI mentor. Drop code, ask DSA, or let me explain any concept in C, C++, Python or Java.`,
    },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: `Great question! Here's a clear explanation: "${text}" — let's break it down step by step. (Connect Lovable Cloud to enable real AI responses.)`,
        },
      ]);
    }, 700);
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
      <header className="sticky top-0 z-20 flex items-center gap-3 px-4 py-4 backdrop-blur-xl bg-background/70 border-b border-border">
        <button
          onClick={() => navigate({ to: "/dashboard" })}
          className="flex h-9 w-9 items-center justify-center rounded-xl glass"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl gradient-vibrant shadow-glow">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">Genie AI</p>
          <p className="text-[10px] text-success">● Online</p>
        </div>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "gradient-primary text-primary-foreground rounded-br-sm" : "glass rounded-bl-sm"}`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="shrink-0 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-accent"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="sticky bottom-0 flex items-center gap-2 border-t border-border bg-background/80 px-4 py-3 backdrop-blur-xl"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full glass"
        >
          <Mic className="h-4 w-4" />
        </button>
        <button
          type="submit"
          className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary shadow-glow"
        >
          <Send className="h-4 w-4 text-primary-foreground" />
        </button>
      </form>
    </div>
  );
}
