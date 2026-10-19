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
      </div>
    </nav>
  );
}
export default Navbar;
