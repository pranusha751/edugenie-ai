export const studentName = "Aarav";

export const weeklyProgress = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 80 },
];

export const subjects = [
  { name: "Mathematics", mastery: 82, color: "from-violet-500 to-fuchsia-500", icon: "📐" },
  { name: "Physics", mastery: 67, color: "from-blue-500 to-cyan-500", icon: "⚛️" },
  { name: "Chemistry", mastery: 74, color: "from-emerald-500 to-teal-500", icon: "🧪" },
  { name: "Biology", mastery: 58, color: "from-pink-500 to-rose-500", icon: "🧬" },
  { name: "English", mastery: 90, color: "from-amber-500 to-orange-500", icon: "📖" },
];

export const planner = [
  { time: "08:00", subject: "Mathematics", topic: "Calculus — Limits", duration: "45 min", color: "from-violet-500 to-fuchsia-500" },
  { time: "09:00", subject: "Physics", topic: "Newton's Laws Revision", duration: "30 min", color: "from-blue-500 to-cyan-500" },
  { time: "11:00", subject: "Chemistry", topic: "Organic — Alkenes", duration: "45 min", color: "from-emerald-500 to-teal-500" },
  { time: "16:00", subject: "Biology", topic: "Weak Topic: Genetics", duration: "60 min", color: "from-pink-500 to-rose-500" },
  { time: "19:00", subject: "English", topic: "Essay Practice", duration: "30 min", color: "from-amber-500 to-orange-500" },
];

export const leaderboard = [
  { rank: 1, name: "Priya Sharma", xp: 12480, avatar: "👩‍🎓", badge: "Grandmaster" },
  { rank: 2, name: "Aarav Mehta", xp: 11920, avatar: "🧑‍🎓", badge: "Master", isYou: true },
  { rank: 3, name: "Diya Kapoor", xp: 11210, avatar: "👩‍💻", badge: "Diamond" },
  { rank: 4, name: "Rohan Iyer", xp: 10880, avatar: "👨‍🔬", badge: "Diamond" },
  { rank: 5, name: "Sara Khan", xp: 9740, avatar: "👩‍🏫", badge: "Platinum" },
  { rank: 6, name: "Kabir Singh", xp: 9320, avatar: "🧑‍🚀", badge: "Platinum" },
  { rank: 7, name: "Meera Nair", xp: 8780, avatar: "👩‍🎤", badge: "Gold" },
];

export const badges = [
  { name: "Streak Star", icon: "🔥", earned: true, desc: "7-day streak" },
  { name: "Quiz Master", icon: "🏆", earned: true, desc: "100 quizzes" },
  { name: "Perfectionist", icon: "💎", earned: true, desc: "10 perfect scores" },
  { name: "Night Owl", icon: "🦉", earned: true, desc: "Study after 10pm" },
  { name: "Speed Demon", icon: "⚡", earned: false, desc: "Quiz under 60s" },
  { name: "Bookworm", icon: "📚", earned: false, desc: "50 hours studied" },
  { name: "Mentor", icon: "🎓", earned: false, desc: "Help 10 friends" },
  { name: "Legend", icon: "👑", earned: false, desc: "Reach Level 50" },
];

export const sampleQuiz = [
  {
    q: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
    answer: 0,
  },
  {
    q: "Which law states F = ma?",
    options: ["Newton's First", "Newton's Second", "Newton's Third", "Hooke's Law"],
    answer: 1,
  },
  {
    q: "H₂O is the chemical formula for?",
    options: ["Hydrogen Peroxide", "Water", "Oxygen", "Hydroxide"],
    answer: 1,
  },
];
