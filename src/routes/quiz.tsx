import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { sampleQuiz } from "@/lib/mock-data";
import { Sparkles, Timer, Check, X, Trophy } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  component: Quiz,
});

type Stage = "config" | "playing" | "result";

function Quiz() {
  const [stage, setStage] = useState<Stage>("config");
  const [subject, setSubject] = useState("Mathematics");
  const [difficulty, setDifficulty] = useState("Medium");
  const [count, setCount] = useState(3);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [time, setTime] = useState(20);

  useEffect(() => {
    if (stage !== "playing" || picked !== null) return;
    if (time === 0) { handleNext(); return; }
    const t = setTimeout(() => setTime((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [stage, time, picked]);

  function handleNext() {
    const newAnswers = [...answers, picked ?? -1];
    if (idx + 1 >= sampleQuiz.length) {
      setAnswers(newAnswers);
      setStage("result");
      return;
    }
    setAnswers(newAnswers);
    setIdx(idx + 1);
    setPicked(null);
    setTime(20);
  }

  if (stage === "config") {
    return (
      <MobileShell>
        <header className="mb-5">
          <p className="text-xs text-muted-foreground">AI Quiz Generator</p>
          <h1 className="text-2xl font-bold">Build your quiz</h1>
        </header>
        <div className="glass space-y-5 rounded-3xl p-5">
          <Field label="Subject">
            <div className="grid grid-cols-2 gap-2">
              {["C", "C++", "Python", "Java", "DSA", "DBMS", "OS", "Aptitude"].map((s) => (
                <button key={s} onClick={() => setSubject(s)} className={`rounded-2xl border py-2.5 text-xs font-medium transition ${subject === s ? "gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-background/60"}`}>{s}</button>
              ))}
            </div>
          </Field>
          <Field label="Difficulty">
            <div className="grid grid-cols-3 gap-2">
              {["Easy", "Medium", "Hard"].map((d) => (
                <button key={d} onClick={() => setDifficulty(d)} className={`rounded-2xl border py-2.5 text-xs font-medium transition ${difficulty === d ? "gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-background/60"}`}>{d}</button>
              ))}
            </div>
          </Field>
          <Field label={`Questions: ${count}`}>
            <input type="range" min={3} max={20} value={count} onChange={(e) => setCount(+e.target.value)} className="w-full accent-primary" />
          </Field>
          <button onClick={() => setStage("playing")} className="flex w-full items-center justify-center gap-2 rounded-2xl gradient-vibrant py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            <Sparkles className="h-4 w-4" /> Generate AI Quiz
          </button>
        </div>
      </MobileShell>
    );
  }

  if (stage === "playing") {
    const q = sampleQuiz[idx];
    return (
      <MobileShell hideNav hideFab>
        <header className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground">{idx + 1} / {sampleQuiz.length}</span>
          <div className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5">
            <Timer className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold">{time}s</span>
          </div>
        </header>
        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full gradient-primary transition-all" style={{ width: `${((idx + 1) / sampleQuiz.length) * 100}%` }} />
        </div>
        <div className="glass rounded-3xl p-5">
          <p className="text-xs text-muted-foreground">Question {idx + 1}</p>
          <h2 className="mt-1 text-lg font-bold leading-snug">{q.q}</h2>
          <div className="mt-5 space-y-2">
            {q.options.map((o, i) => {
              const isPicked = picked === i;
              const showState = picked !== null;
              const isCorrect = i === q.answer;
              const cls = !showState
                ? "border-border bg-background/60 hover:border-primary"
                : isCorrect
                ? "border-success bg-success/10 text-success-foreground"
                : isPicked
                ? "border-destructive bg-destructive/10"
                : "border-border bg-background/40 opacity-60";
              return (
                <button
                  key={i}
                  disabled={showState}
                  onClick={() => setPicked(i)}
                  className={`flex w-full items-center justify-between rounded-2xl border-2 p-3.5 text-left text-sm font-medium transition ${cls}`}
                >
                  <span>{o}</span>
                  {showState && isCorrect && <Check className="h-5 w-5 text-success" />}
                  {showState && isPicked && !isCorrect && <X className="h-5 w-5 text-destructive" />}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <button onClick={handleNext} className="mt-5 w-full rounded-2xl gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              {idx + 1 === sampleQuiz.length ? "See Results" : "Next →"}
            </button>
          )}
        </div>
      </MobileShell>
    );
  }

  const correct = answers.filter((a, i) => a === sampleQuiz[i].answer).length;
  const pct = Math.round((correct / sampleQuiz.length) * 100);
  return (
    <MobileShell>
      <div className="glass relative overflow-hidden rounded-3xl p-6 text-center">
        <div className="absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full gradient-primary opacity-30 blur-3xl" />
        <div className="relative">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-3xl gradient-vibrant shadow-glow animate-float">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <p className="text-xs text-muted-foreground">Quiz complete!</p>
          <h1 className="text-4xl font-extrabold text-gradient">{pct}%</h1>
          <p className="mt-1 text-sm">You got {correct} of {sampleQuiz.length} right</p>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <Stat label="Correct" value={correct} color="text-success" />
            <Stat label="Wrong" value={sampleQuiz.length - correct} color="text-destructive" />
            <Stat label="XP" value={`+${correct * 50}`} color="text-primary" />
          </div>
        </div>
      </div>

      <h3 className="mt-6 mb-2 font-semibold">Review</h3>
      <div className="space-y-2">
        {sampleQuiz.map((q, i) => {
          const ok = answers[i] === q.answer;
          return (
            <div key={i} className="glass flex items-start gap-3 rounded-2xl p-3">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${ok ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"}`}>
                {ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{q.q}</p>
                <p className="text-xs text-muted-foreground">Answer: {q.options[q.answer]}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={() => { setStage("config"); setIdx(0); setAnswers([]); setPicked(null); setTime(20); }} className="mt-5 w-full rounded-2xl gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-glow">
        Take another quiz
      </button>
    </MobileShell>
  );
}

function Field({ label, children }: any) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}
function Stat({ label, value, color }: any) {
  return (
    <div className="rounded-2xl bg-background/60 p-3">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}
