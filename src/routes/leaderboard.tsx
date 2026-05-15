import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { leaderboard } from "@/lib/mock-data";
import { Crown, Medal } from "lucide-react";

export const Route = createFileRoute("/leaderboard")({
  component: Leaderboard,
});

function Leaderboard() {
  const [tab, setTab] = useState<"global" | "friends">("global");
  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <MobileShell>
      <header className="mb-4 text-center">
        <p className="text-xs text-muted-foreground">Leaderboard</p>
        <h1 className="text-2xl font-bold">Top learners</h1>
      </header>

      <div className="mx-auto mb-5 flex w-fit gap-1 rounded-full glass p-1">
        {(["global", "friends"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-1.5 text-xs font-semibold capitalize transition ${tab === t ? "gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-end justify-center gap-2">
        <Podium user={top3[1]} height="h-20" rank={2} />
        <Podium user={top3[0]} height="h-28" rank={1} crown />
        <Podium user={top3[2]} height="h-16" rank={3} />
      </div>

      <div className="space-y-2">
        {rest.map((u) => (
          <div
            key={u.rank}
            className={`glass flex items-center gap-3 rounded-2xl p-3 ${u.isYou ? "ring-2 ring-primary shadow-glow" : ""}`}
          >
            <span className="w-6 text-center text-sm font-bold text-muted-foreground">
              #{u.rank}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-soft text-xl">
              {u.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">
                {u.name} {u.isYou && <span className="text-[10px] text-primary">(You)</span>}
              </p>
              <p className="text-[10px] text-muted-foreground">{u.badge}</p>
            </div>
            <p className="text-sm font-bold text-gradient">{u.xp.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}

function Podium({ user, height, rank, crown }: any) {
  const colors = [
    "from-amber-400 to-orange-500",
    "from-slate-300 to-slate-500",
    "from-orange-700 to-amber-800",
  ];
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="relative">
        {crown && (
          <Crown className="absolute -top-5 left-1/2 h-5 w-5 -translate-x-1/2 fill-yellow-400 text-yellow-400" />
        )}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl gradient-soft text-2xl shadow-card ${rank === 1 ? "ring-4 ring-yellow-400" : ""}`}
        >
          {user.avatar}
        </div>
      </div>
      <p className="mt-2 max-w-full truncate text-xs font-semibold">{user.name.split(" ")[0]}</p>
      <p className="text-[10px] font-bold text-gradient">{user.xp.toLocaleString()}</p>
      <div
        className={`mt-2 flex w-full ${height} items-start justify-center rounded-t-2xl bg-gradient-to-b ${colors[rank - 1]} pt-2 text-white shadow-glow`}
      >
        <Medal className="h-5 w-5" />
      </div>
    </div>
  );
}
