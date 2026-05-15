export const studentName = "Aarav";
export const studentMeta = { branch: "B.Tech CSE", year: "3rd Year", semester: "Sem 5" };

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
  { name: "C Programming", mastery: 88, color: "from-sky-500 to-blue-600", icon: "🅒" },
  { name: "C++ / OOP", mastery: 76, color: "from-indigo-500 to-violet-600", icon: "➕" },
  { name: "Python", mastery: 92, color: "from-yellow-400 to-amber-500", icon: "🐍" },
  { name: "Java", mastery: 70, color: "from-orange-500 to-red-500", icon: "☕" },
  { name: "Data Structures", mastery: 64, color: "from-fuchsia-500 to-pink-500", icon: "🧩" },
  { name: "DBMS — SQL", mastery: 81, color: "from-emerald-500 to-teal-500", icon: "🗄️" },
  { name: "Operating Systems", mastery: 58, color: "from-rose-500 to-pink-600", icon: "💻" },
  { name: "Engg. Mathematics", mastery: 72, color: "from-violet-500 to-fuchsia-500", icon: "📐" },
];

export const planner = [
  {
    time: "08:00",
    subject: "Python",
    topic: "NumPy & Pandas — Practice",
    duration: "45 min",
    color: "from-yellow-400 to-amber-500",
  },
  {
    time: "09:30",
    subject: "Data Structures",
    topic: "Linked Lists — Reverse in O(n)",
    duration: "60 min",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    time: "11:30",
    subject: "C++",
    topic: "OOP — Polymorphism & vtables",
    duration: "45 min",
    color: "from-indigo-500 to-violet-600",
  },
  {
    time: "16:00",
    subject: "Operating Systems",
    topic: "Weak Topic: Page Replacement",
    duration: "60 min",
    color: "from-rose-500 to-pink-600",
  },
  {
    time: "18:00",
    subject: "Java",
    topic: "Streams & Lambdas",
    duration: "30 min",
    color: "from-orange-500 to-red-500",
  },
  {
    time: "20:00",
    subject: "DBMS",
    topic: "SQL Joins & Indexes",
    duration: "30 min",
    color: "from-emerald-500 to-teal-500",
  },
];

export const codingTracks = [
  {
    lang: "C",
    icon: "🅒",
    color: "from-sky-500 to-blue-600",
    problems: 124,
    solved: 88,
    rating: 1420,
  },
  {
    lang: "C++",
    icon: "➕",
    color: "from-indigo-500 to-violet-600",
    problems: 210,
    solved: 132,
    rating: 1685,
  },
  {
    lang: "Python",
    icon: "🐍",
    color: "from-yellow-400 to-amber-500",
    problems: 180,
    solved: 161,
    rating: 1820,
  },
  {
    lang: "Java",
    icon: "☕",
    color: "from-orange-500 to-red-500",
    problems: 156,
    solved: 92,
    rating: 1510,
  },
];

export const leaderboard = [
  { rank: 1, name: "Priya Sharma", xp: 12480, avatar: "👩‍💻", badge: "DSA Grandmaster" },
  { rank: 2, name: "Aarav Mehta", xp: 11920, avatar: "🧑‍💻", badge: "Code Master", isYou: true },
  { rank: 3, name: "Diya Kapoor", xp: 11210, avatar: "👩‍🔬", badge: "Python Pro" },
  { rank: 4, name: "Rohan Iyer", xp: 10880, avatar: "👨‍💻", badge: "C++ Diamond" },
  { rank: 5, name: "Sara Khan", xp: 9740, avatar: "👩‍🏫", badge: "Java Platinum" },
  { rank: 6, name: "Kabir Singh", xp: 9320, avatar: "🧑‍🚀", badge: "DBMS Platinum" },
  { rank: 7, name: "Meera Nair", xp: 8780, avatar: "👩‍🎤", badge: "Algo Gold" },
];

export const badges = [
  { name: "Streak Star", icon: "🔥", earned: true, desc: "7-day streak" },
  { name: "DSA Crusher", icon: "🧩", earned: true, desc: "100 problems solved" },
  { name: "Bug Hunter", icon: "🐛", earned: true, desc: "Debug 25 programs" },
  { name: "Night Coder", icon: "🦉", earned: true, desc: "Code after 10pm" },
  { name: "Speed Coder", icon: "⚡", earned: false, desc: "Solve in under 5 min" },
  { name: "Polyglot", icon: "🌐", earned: false, desc: "Master 4 languages" },
  { name: "Open Sourcerer", icon: "🐙", earned: false, desc: "Merge a PR" },
  { name: "Placement Ready", icon: "👑", earned: false, desc: "Reach Level 50" },
];

export const sampleQuiz = [
  {
    q: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: 1,
  },
  {
    q: "In C++, which keyword prevents a function from being overridden?",
    options: ["static", "const", "final", "sealed"],
    answer: 2,
  },
  {
    q: "Which Python data type is immutable?",
    options: ["list", "dict", "set", "tuple"],
    answer: 3,
  },
  {
    q: "In Java, which collection does NOT allow duplicate elements?",
    options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
    answer: 2,
  },
  {
    q: "What does `int *p` mean in C?",
    options: ["p is an integer", "p is a pointer to int", "p multiplied by int", "Syntax error"],
    answer: 1,
  },
];
