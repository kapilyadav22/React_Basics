// Tracks hover state on an element.

import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", enter);
      node.addEventListener("mouseleave", leave);
    }
    return () => {
      if (node) {
        node.removeEventListener("mouseenter", enter);
        node.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return [ref, hovered];
}

export default useHover;


// Use case: Tooltip, hover effects, custom dropdowns.