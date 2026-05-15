import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { subjects, weeklyProgress } from "@/lib/mock-data";
import { Flame, Target, Clock, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/progress")({
  component: Progress,
});

function Progress() {
  const max = Math.max(...weeklyProgress.map((d) => d.value));
  const overall = 76;
  const r = 50;
  const circ = 2 * Math.PI * r;
  const offset = circ - (overall / 100) * circ;

  return (
    <MobileShell>
      <header className="mb-5">
        <p className="text-xs text-muted-foreground">Progress Tracking</p>
        <h1 className="text-2xl font-bold">Your stats</h1>
      </header>

      <div className="glass mb-5 flex items-center gap-5 rounded-3xl p-5">
        <div className="relative h-32 w-32 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="oklch(0.9 0.02 280)"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="url(#g)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={offset}
            />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.24 285)" />
                <stop offset="100%" stopColor="oklch(0.65 0.2 240)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-gradient">{overall}%</p>
            <p className="text-[10px] text-muted-foreground">Overall</p>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <Mini icon={Flame} label="Streak" value="12 days" color="from-orange-500 to-rose-500" />
          <Mini icon={Target} label="Accuracy" value="84%" color="from-emerald-500 to-teal-500" />
          <Mini icon={Clock} label="Time" value="48h" color="from-blue-500 to-cyan-500" />
        </div>
      </div>

      <div className="glass mb-5 rounded-3xl p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold">Weekly performance</h3>
          <span className="flex items-center gap-1 text-xs text-success font-medium">
            <TrendingUp className="h-3 w-3" /> +18%
          </span>
        </div>
        <div className="flex h-36 items-end justify-between gap-2">
          {weeklyProgress.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
              <span className="text-[10px] font-bold text-primary">{d.value}</span>
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-t-lg gradient-primary transition-all"
                  style={{ height: `${(d.value / max) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="mb-2 font-semibold">Subject mastery</h3>
      <div className="space-y-2">
        {subjects.map((s) => (
          <div key={s.name} className="glass flex items-center gap-3 rounded-2xl p-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-xl shadow-soft`}
            >
              {s.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-xs font-bold text-primary">{s.mastery}%</p>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                  style={{ width: `${s.mastery}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MobileShell>
  );
}

function Mini({ icon: Icon, label, value, color }: any) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${color}`}
      >
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <p className="text-[10px] text-muted-foreground">{label}</p>
        <p className="text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}
