import { TfiSearch, TfiBell, TfiMenuAlt } from "react-icons/tfi";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("ruby-theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("ruby-theme", newTheme);
    document.documentElement.style.colorScheme = newTheme;
  };

  return (
    <nav className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-rose-900 lg:hidden">
          <TfiMenuAlt size={24} />
        </button>
        <div className="relative hidden sm:block">
          <TfiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search reports..."
            className="h-10 w-64 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-rose-900 focus:ring-1 focus:ring-rose-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-all"
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
