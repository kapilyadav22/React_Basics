// Adds/removes an event listener safely.


import { useEffect, useRef } from "react";

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    const eventListener = (e) => savedHandler.current(e);
    element.addEventListener(eventName, eventListener);
    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
}

export default useEventListener;

// Use case: Global key presses, clicks, resize events.