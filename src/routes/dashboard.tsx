import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { getUser } from "@/lib/auth-utils";
import { studentMeta, weeklyProgress, subjects, codingTracks } from "@/lib/mock-data";
import { Flame, Sparkles, Brain, Trophy, Play, BookOpen, Bell } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const user = getUser();
  const max = Math.max(...weeklyProgress.map((d) => d.value));
  return (
    <MobileShell>
      <header className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">
            {studentMeta.branch} · {studentMeta.semester}
          </p>
          <h1 className="text-2xl font-bold">Hi, {user.name} 👋</h1>
        </div>
        <Link
          to="/profile"
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary text-xl shadow-glow"
        >
          🧑‍🎓
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">
            3
          </span>
        </Link>
      </header>

      <div className="glass mb-4 flex items-center gap-3 rounded-3xl p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-2xl shadow-glow">
          <Flame className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Daily streak</p>
          <p className="text-lg font-bold">12 days 🔥</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">XP</p>
          <p className="text-lg font-bold text-gradient">11,920</p>
        </div>
      </div>

      <div className="relative mb-5 overflow-hidden rounded-3xl gradient-vibrant p-5 text-white shadow-glow">
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
        <div className="relative flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wide opacity-80">AI Recommendation</p>
            <h3 className="mt-1 font-semibold">Crack DSA: Linked Lists today</h3>
            <p className="mt-1 text-sm opacity-90">
              Your weakest topic for placements. Solve 3 problems to boost mastery by 15%.
            </p>
            <button className="mt-3 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-primary">
              Start now →
            </button>
          </div>
        </div>
      </div>

      <div className="glass mb-5 rounded-3xl p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold">This week</h3>
          <span className="text-xs text-muted-foreground">+18% vs last</span>
        </div>
        <div className="flex h-32 items-end justify-between gap-2">
          {weeklyProgress.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
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

      <div className="mb-5 grid grid-cols-2 gap-3">
        <QuickAction
          to="/quiz"
          icon={Brain}
          label="Code Quiz"
          sub="C · C++ · Py · Java"
          gradient="from-violet-500 to-fuchsia-500"
        />
        <QuickAction
          to="/planner"
          icon={BookOpen}
          label="Continue"
          sub="Linked Lists"
          gradient="from-blue-500 to-cyan-500"
        />
        <QuickAction
          to="/mentor"
          icon={Sparkles}
          label="AI Mentor"
          sub="Debug & explain"
          gradient="from-pink-500 to-rose-500"
        />
        <QuickAction
          to="/leaderboard"
          icon={Trophy}
          label="Leaderboard"
          sub="Rank #2"
          gradient="from-amber-500 to-orange-500"
        />
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">Coding tracks</h3>
        <span className="text-xs text-muted-foreground">DSA · CP</span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-2">
        {codingTracks.map((t) => (
          <Link
            key={t.lang}
            to="/quiz"
            className="glass rounded-2xl p-3 transition hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-base font-bold text-white shadow-soft`}
              >
                {t.icon}
              </div>
              <span className="text-[10px] font-bold text-primary">{t.rating}</span>
            </div>
            <p className="mt-2 text-sm font-semibold">{t.lang}</p>
            <p className="text-[10px] text-muted-foreground">
              {t.solved}/{t.problems} solved
            </p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${t.color}`}
                style={{ width: `${(t.solved / t.problems) * 100}%` }}
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold">Your subjects</h3>
        <Link to="/progress" className="text-xs text-primary font-medium">
          See all
        </Link>
      </div>
      <div className="space-y-2">
        {subjects.slice(0, 3).map((s) => (
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

function QuickAction({
  to,
  icon: Icon,
  label,
  sub,
  gradient,
}: {
  to: string;
  icon: any;
  label: string;
  sub: string;
  gradient: string;
}) {
  return (
    <Link
      to={to}
      className="glass group relative overflow-hidden rounded-2xl p-4 transition hover:scale-[1.02]"
    >
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-soft`}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-[11px] text-muted-foreground">{sub}</p>
    </Link>
  );
}
