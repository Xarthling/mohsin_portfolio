import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      console.log("🌙 Dark mode enabled");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      console.log("☀️ Light mode enabled");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
      aria-label="Toggle theme"
    >
      {dark ? (
        <FiSun className="text-yellow-400 text-xl" />
      ) : (
        <FiMoon className="text-gray-800 dark:text-gray-100 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
