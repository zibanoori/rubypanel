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

  
      <div className="flex items-center gap-6">
        <div 
          onClick={toggleTheme}
          className={`relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ${
            isDark ? "bg-slate-800" : "bg-blue-200"
          }`}
        >
          <div className="absolute right-2 z-0 flex items-center justify-center">
            <IoSunnyOutline size={15} className={`transition-all duration-300 drop-shadow-sm ${isDark ? "opacity-0 scale-75" : "opacity-100 scale-100 text-orange-600"}`} />
          </div>

          <div className="absolute left-2 z-0 flex items-center justify-center">
            <IoMoonOutline size={15} className={`transition-all duration-300 drop-shadow-sm ${isDark ? "opacity-100 scale-100 text-indigo-400" : "opacity-0 scale-75"}`} />
          </div>

          <div
            className={`relative z-10 h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
              isDark ? "translate-x-8" : "translate-x-0"
            }`}
          ></div>
        </div>

   
        <button className="relative text-slate-500 hover:text-rose-900 dark:text-slate-400 transition-colors">
          <TfiBell size={20} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
            3
          </span>
        </button>

     
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;