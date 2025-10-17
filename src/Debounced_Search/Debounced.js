import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [delay, setDelay] = useState(1000); 

  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
      setIsSearching(false);
    }, delay);

    return () => clearTimeout(handler);
  }, [searchTerm, delay]);

  useEffect(() => {
    if (debouncedValue.trim() !== '') {
      fetchData(debouncedValue);
    } else {
      setResults([]);
    }
  }, [debouncedValue]);

  const fetchData = async (query) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setResults(data.products || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        fontFamily: 'sans-serif'
      }}
    >
        <input
        type="number"
        placeholder='Set Delay'
        value={delay}
        style={{
          padding: '10px',
          width: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
        onChange={(e)=>setDelay(e.target.value)}
        />

      
      <h2>🔍 Search with Debouncing</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />

      <p style={{ marginTop: '10px', color: 'gray' }}>
        ⏱ Debounce Delay: <strong>{delay} ms</strong>
      </p>

      {isSearching && searchTerm && (
        <p style={{ color: 'orange' }}>⌛ Waiting for you to stop typing...</p>
      )}

      {/* Show debounced value */}
      {debouncedValue && !isSearching && (
        <p style={{ color: 'green' }}>Searching for: <strong>{debouncedValue}</strong></p>
      )}

      {/* Results */}
      <div
        style={{
          marginTop: '20px',
          width: '300px',
          textAlign: 'left',
          backgroundColor: '#fafafa',
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: '1px solid #eee',
                padding: '5px 0'
              }}
            >
              {item.title} — ${item.price}
            </div>
          ))
        ) : (
          searchTerm &&
          !isSearching && (
            <p style={{ color: 'gray' }}>No results found for "{debouncedValue}"</p>
          )
        )}
      </div>
    </div>
  );
};

export default DebouncedSearch;
