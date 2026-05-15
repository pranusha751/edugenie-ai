export const getUser = () => {
  if (typeof window === "undefined") return { name: "Aarav", email: "aarav@school.com" };
  const storedName = localStorage.getItem("userName");
  const storedEmail = localStorage.getItem("userEmail");
  return {
    name: storedName || "Aarav",
    email: storedEmail || "aarav@school.com",
  };
};

export const setUser = (name: string, email: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
};

export const logout = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
};
