import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.style.background =
      theme === "dark" ? "#121212" : "#ffffff";

    document.body.style.color =
      theme === "dark" ? "#ffffff" : "#000000";

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div style={{ padding: "16px" }}>
      <button
        onClick={() =>
          setTheme(prev => (prev === "light" ? "dark" : "light"))
        }
        style={{
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
