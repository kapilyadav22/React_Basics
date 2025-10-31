

| Step | Function          | Description                                        |
| ---- | ----------------- | -------------------------------------------------- |
| 1    | `createContext()` | Creates a new Context object                       |
| 2    | `Provider`        | Supplies the context value to all child components |
| 3    | `useContext()`    | Reads the current context value inside a component |


----------------------------------------------------------
1. Create the Context:
import { createContext } from "react";

export const ThemeContext = createContext();



----------------------------------------------------------
2.Provide the Context

import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Child from "./Child";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;



----------------------------------------------------------
3.Consume the Context

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Child;




