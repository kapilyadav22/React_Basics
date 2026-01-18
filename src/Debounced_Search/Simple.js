import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const resData = await res.json();
      setData(resData?.products || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!search) {
      setData([]);
      setIsDebouncing(false);
      return;
    }

    setIsDebouncing(true);

    const handler = setTimeout(() => {
      setIsDebouncing(false);
      fetchData();
    }, 500);

    return () => clearTimeout(handler);
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
