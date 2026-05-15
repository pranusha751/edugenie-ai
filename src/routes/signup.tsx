import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

const avatars = ["🧑‍🎓", "👩‍🎓", "🧑‍💻", "👩‍💻", "🧑‍🔬", "👩‍🚀", "🧑‍🎤", "👩‍🏫"];

function Signup() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(avatars[0]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-10">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow">
            <Brain className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Start your AI-powered journey</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); navigate({ to: "/dashboard" }); }}
          className="glass space-y-4 rounded-3xl p-6"
        >
          <div>
            <label className="mb-2 block text-xs font-medium text-muted-foreground">Pick an avatar</label>
            <div className="grid grid-cols-8 gap-1.5">
              {avatars.map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setAvatar(a)}
                  className={`relative flex h-9 items-center justify-center rounded-xl text-lg transition ${
                    avatar === a ? "gradient-primary shadow-glow scale-110" : "bg-background/60 hover:bg-accent"
                  }`}
                >
                  {a}
                  {avatar === a && (
                    <Check className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-success p-0.5 text-success-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <input required placeholder="Full name" className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
          <input required type="email" placeholder="Email" className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />
          <input required type="password" placeholder="Password" className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30" />

          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 accent-primary" />
            <span>I agree to the Terms and Privacy Policy</span>
          </div>

          <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-2xl gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            Create account
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
