import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { badges } from "@/lib/mock-data";
import { Zap, Gift, Lock } from "lucide-react";

export const Route = createFileRoute("/rewards")({
  component: Rewards,
});

const challenges = [
  { name: "Solve 5 quizzes", reward: 100, progress: 60 },
  { name: "Study 60 minutes", reward: 150, progress: 40 },
  { name: "Score 90%+", reward: 200, progress: 85 },
];

function Rewards() {
  return (
    <MobileShell>
      <header className="mb-5">
        <p className="text-xs text-muted-foreground">Rewards & Achievements</p>
        <h1 className="text-2xl font-bold">Your trophies</h1>
      </header>

      <div className="relative mb-5 overflow-hidden rounded-3xl gradient-vibrant p-5 text-white shadow-glow">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="relative flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <Zap className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase opacity-80">Total XP</p>
            <p className="text-3xl font-extrabold">11,920</p>
            <p className="text-xs opacity-90">Level 24 — Master</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs"><span>Level 24</span><span>Level 25</span></div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white" style={{ width: "68%" }} />
          </div>
          <p className="mt-1 text-[10px] opacity-80">680 / 1000 XP to next level</p>
        </div>
      </div>

      <h3 className="mb-2 font-semibold">Daily challenges</h3>
      <div className="mb-5 space-y-2">
        {challenges.map((c) => (
          <div key={c.name} className="glass flex items-center gap-3 rounded-2xl p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-soft">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="text-xs font-bold text-primary">+{c.reward} XP</p>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full gradient-primary" style={{ width: `${c.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-2 font-semibold">Badges</h3>
      <div className="grid grid-cols-4 gap-2">
        {badges.map((b) => (
          <div key={b.name} className={`glass relative flex flex-col items-center gap-1 rounded-2xl p-3 text-center ${!b.earned && "opacity-60"}`}>
            {!b.earned && <Lock className="absolute right-1.5 top-1.5 h-3 w-3 text-muted-foreground" />}
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${b.earned ? "gradient-primary shadow-glow" : "bg-muted"}`}>
              {b.icon}
            </div>
            <p className="text-[10px] font-semibold leading-tight">{b.name}</p>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}
