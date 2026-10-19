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
}
