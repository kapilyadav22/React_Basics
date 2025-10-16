// Tracks if a key is pressed.

import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false);

  const downHandler = ({ key }) => { if (key === targetKey) setPressed(true); };
  const upHandler = ({ key }) => { if (key === targetKey) setPressed(false); };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return pressed;
}

export default useKeyPress;


// Use case: Hotkeys, game controls.