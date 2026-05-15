import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Brain, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduGenie AI — Learn Smarter with AI" },
      { name: "description", content: "AI-powered personalized learning for students. Quizzes, study plans, and a smart mentor." },
      { property: "og:title", content: "EduGenie AI" },
      { property: "og:description", content: "Learn Smarter with AI." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/login" }), 2200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-vibrant opacity-90" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/15 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <div className="relative mb-6 animate-float">
          <div className="absolute inset-0 rounded-3xl bg-white/30 blur-2xl" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl">
            <Brain className="h-14 w-14" strokeWidth={2} />
            <Sparkles className="absolute -top-2 -right-2 h-7 w-7 text-yellow-200" />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">EduGenie</h1>
        <p className="mt-1 text-2xl font-light tracking-wide">AI</p>
        <p className="mt-4 text-base text-white/90">Learn Smarter with AI</p>

        <div className="mt-10 flex gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-white" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 animate-bounce rounded-full bg-white" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 animate-bounce rounded-full bg-white" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
