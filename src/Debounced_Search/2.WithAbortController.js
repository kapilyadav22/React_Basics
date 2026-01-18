import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (query, signal) => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
      { signal }
    );

    if (!res.ok) {
      throw new Error("API failed");
    }

    const json = await res.json();
    return json.products || [];
  };

  useEffect(() => {
    if (!search) {
      setData([]);
      return;
    }

    const controller = new AbortController();
    setIsDebouncing(true);

    const timer = setTimeout(async () => {
      setIsDebouncing(false);
      setLoading(true);

      try {
        const products = fetchData(search, controller.signal);
        setData(products);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error(e);
        }
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="App">
      <input
        value={search}
        placeholder="Enter Input"
        onChange={(e) => setSearch(e.target.value)}
      />

      {isDebouncing && <div>Typing...</div>}
      {loading && <div>Loading...</div>}

      {data.map((d) => (
        <div key={d.id}>
          <h4>{d.id}</h4>
          <p>{d.description}</p>
        </div>
      ))}

      {search && !isDebouncing && !loading && data.length === 0 && (
        <div>No data found</div>
      )}
    </div>
  );
}


/**
 Issues without abortcontroller:

  1. Race condition / stale responses

Problem scenario:
    User types p
    API call goes out
    User types phone
    Second API call goes out
    First request responds after second
    Old data overrides new data 


Q.   What is AbortController?
AbortController is a browser API that lets you cancel an ongoing asynchronous operation,
most commonly:
    fetch() requests
    Streams
    Any async task that supports an AbortSignal


How AbortController works internally
    Step-by-step flow:
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal });
    signal is an event emitter
    fetch subscribes to it
    When abort() is called:
    signal emits "abort"
    fetch throws an AbortError
    promise rejects immediately

Why cleanup is CRITICAL?
    React will:
        re-run effect on dependency change
        unmount component

    Without cleanup:
        old fetch continues
        may call setState on unmounted component 
 */