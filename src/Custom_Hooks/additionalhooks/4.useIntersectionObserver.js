// Detects when an element enters/leaves the viewport.

import { useState, useEffect } from "react";

function useIntersectionObserver(ref, options) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}

export default useIntersectionObserver;

// Use case: Lazy loading images, infinite scroll.