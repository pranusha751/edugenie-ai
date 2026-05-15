import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { getUser, logout } from "@/lib/auth-utils";
import { Award, Settings, LogOut, Moon, Sun, Target, ChevronRight, Trophy } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();
  const user = getUser();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };

  return (
    <MobileShell>
      <div className="glass relative mb-5 overflow-hidden rounded-3xl p-5 text-center">
        <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full gradient-primary opacity-30 blur-3xl" />
        <div className="relative">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl gradient-primary text-4xl shadow-glow">
            🧑‍🎓
          </div>
          <h1 className="mt-3 text-xl font-bold">{user.name}</h1>
          <p className="text-xs text-muted-foreground">{user.email}</p>
          <div className="mt-3 flex items-center justify-center gap-3 text-xs">
            <span className="rounded-full gradient-soft px-3 py-1 font-semibold">Level 24</span>
            <span className="rounded-full gradient-soft px-3 py-1 font-semibold">Rank #2</span>
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        <Stat label="Quizzes" value="124" />
        <Stat label="Streak" value="12d" />
        <Stat label="XP" value="11.9k" />
      </div>

      <Section title="Learning">
        <Link to="/planner">
          <Row icon={Target} label="Goals" sub="Placement Prep · DSA + CS Core" />
        </Link>
        <Link to="/rewards">
          <Row icon={Award} label="Certificates" sub="8 earned" />
        </Link>
        <Link to="/leaderboard">
          <Row icon={Trophy} label="Achievements" sub="Rank #2 globally" />
        </Link>
      </Section>

      <Section title="Preferences">
        <button
          onClick={() => setDark(!dark)}
          className="glass flex w-full items-center gap-3 rounded-2xl p-3.5 transition hover:bg-accent"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            {dark ? (
              <Moon className="h-4 w-4 text-primary-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-primary-foreground" />
            )}
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold">Dark mode</p>
            <p className="text-[11px] text-muted-foreground">{dark ? "On" : "Off"}</p>
          </div>
          <div
            className={`h-6 w-11 rounded-full p-0.5 transition ${dark ? "gradient-primary" : "bg-muted"}`}
          >
            <div
              className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${dark ? "translate-x-5" : ""}`}
            />
          </div>
        </button>
        <Row icon={Settings} label="Settings" sub="Notifications, account" />
      </Section>

      <button
        onClick={handleLogout}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 py-3 text-sm font-semibold text-destructive transition hover:bg-destructive/20"
      >
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </MobileShell>
  );
}

function Stat({ label, value }: any) {
  return (
    <div className="glass rounded-2xl p-3 text-center">
      <p className="text-lg font-bold text-gradient">{value}</p>
      <p className="text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}
function Section({ title, children }: any) {
  return (
    <div className="mb-4">
      <h3 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
function Row({ icon: Icon, label, sub }: any) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl p-3.5 transition hover:bg-accent">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
        <Icon className="h-4 w-4 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}
