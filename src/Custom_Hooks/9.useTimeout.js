// Runs a callback after a delay (similar to setTimeout but reactive).


function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => { savedCallback.current = callback; }, [callback]);

  useEffect(() => {
    if (delay == null) return;
    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}


/*
Asked to test: useRef for stable function references.
Use case: Auto-hide toasts, delayed animations.
*/