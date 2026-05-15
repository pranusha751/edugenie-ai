import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function MobileShell({ children, hideNav = false, hideFab = false }: { children: ReactNode; hideNav?: boolean; hideFab?: boolean }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-md px-4 pb-28 pt-6">
      {children}
      {!hideFab && (
        <Link
          to="/mentor"
          className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-vibrant text-primary-foreground shadow-glow animate-pulse-glow"
          aria-label="AI Mentor"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
      )}
      {!hideNav && <BottomNav />}
    </div>
  );
}
