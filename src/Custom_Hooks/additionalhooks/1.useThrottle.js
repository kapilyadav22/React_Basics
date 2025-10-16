// Runs a function at most once every delay ms.

import { useRef, useEffect } from "react";

function useThrottle(value, delay = 500) {
  const lastValue = useRef(value);
  const timeout = useRef(null);

  const [throttledValue, setThrottledValue] = React.useState(value);

  useEffect(() => {
    if (timeout.current == null) {
      setThrottledValue(value);
      lastValue.current = value;

      timeout.current = setTimeout(() => {
        timeout.current = null;
      }, delay);
    }
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;


//Use case: Scroll events, API calls at controlled intervals.