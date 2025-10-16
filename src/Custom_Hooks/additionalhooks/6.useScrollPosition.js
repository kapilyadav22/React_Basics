
// Tracks window scroll position.

import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScroll({ x: window.scrollX, y: window.scrollY });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
}

export default useScrollPosition;

// Use case: Sticky headers, infinite scroll, animations on scroll.