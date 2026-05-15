import { Link, useLocation } from "@tanstack/react-router";
import { Home, Calendar, Brain, Trophy, User } from "lucide-react";

const items = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/planner", icon: Calendar, label: "Planner" },
  { to: "/quiz", icon: Brain, label: "Quiz" },
  { to: "/leaderboard", icon: Trophy, label: "Ranks" },
  { to: "/profile", icon: User, label: "Profile" },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-3 left-1/2 z-40 w-[95%] max-w-md -translate-x-1/2">
      <div className="glass flex items-center justify-around rounded-3xl px-2 py-2">
        {items.map(({ to, icon: Icon, label }) => {
          const active = pathname === to || pathname.startsWith(to + "/");
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-0.5 rounded-2xl px-3 py-2 transition-all ${
                active
                  ? "gradient-primary text-primary-foreground shadow-glow scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
