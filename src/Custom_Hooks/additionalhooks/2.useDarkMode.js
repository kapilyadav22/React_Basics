// Tracks dark/light mode and syncs with localStorage.

import { useState, useEffect } from "react";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggle = () => setDarkMode((prev) => !prev);

  return [darkMode, toggle];
}

export default useDarkMode;


// Use case: Dark mode toggle for websites/apps.