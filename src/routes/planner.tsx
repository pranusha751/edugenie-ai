import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { planner } from "@/lib/mock-data";
import { Sparkles, AlertCircle, Video, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/planner")({
  component: Planner,
});

const days = ["M", "T", "W", "T", "F", "S", "S"];

function Planner() {
  const today = new Date().getDay() || 7;
  return (
    <MobileShell>
      <header className="mb-5">
        <p className="text-xs text-muted-foreground">AI Study Planner</p>
        <h1 className="text-2xl font-bold">Today's plan</h1>
      </header>

      <div className="glass mb-5 rounded-3xl p-4">
        <div className="mb-3 flex items-center justify-between text-xs">
          <span className="font-semibold">November 2025</span>
          <span className="text-muted-foreground">Week 47</span>
        </div>
        <div className="flex justify-between gap-1">
          {days.map((d, i) => {
            const date = 17 + i;
            const isToday = i + 1 === today;
            return (
              <div key={i} className={`flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 ${isToday ? "gradient-primary text-primary-foreground shadow-glow" : ""}`}>
                <span className="text-[10px] opacity-70">{d}</span>
                <span className="text-sm font-bold">{date}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mb-5 overflow-hidden rounded-3xl gradient-vibrant p-4 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          <p className="text-xs uppercase tracking-wide opacity-90">AI suggestion</p>
        </div>
        <p className="mt-1 text-sm">Focus on Genetics & Calculus today — both have upcoming revision deadlines.</p>
      </div>

      <h3 className="mb-2 font-semibold">Schedule</h3>
      <div className="space-y-2">
        {planner.map((p, i) => (
          <div key={i} className="glass flex items-center gap-3 rounded-2xl p-3">
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground">{p.time}</p>
              <p className="text-[10px] font-semibold text-primary">{p.duration}</p>
            </div>
            <div className={`h-12 w-1 rounded-full bg-gradient-to-b ${p.color}`} />
            <div className="flex-1">
              <p className="text-sm font-semibold">{p.subject}</p>
              <p className="text-xs text-muted-foreground">{p.topic}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>

      <h3 className="mt-6 mb-2 font-semibold">Smart recommendations</h3>
      <div className="space-y-2">
        <div className="glass flex items-start gap-3 rounded-2xl p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500">
            <AlertCircle className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Weak topic alert</p>
            <p className="text-xs text-muted-foreground">Genetics — only 58% mastery. Revise basics today.</p>
          </div>
        </div>
        <div className="glass flex items-start gap-3 rounded-2xl p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Video className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Recommended video</p>
            <p className="text-xs text-muted-foreground">"Newton's Laws — Visual Guide" • 12 min</p>
          </div>
        </div>
      </div>
    </MobileShell>
  );
}
