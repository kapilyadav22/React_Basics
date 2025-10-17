import React, { useState, useEffect, useRef } from 'react';

const AutoComplete = ({
  options = [],        
  placeholder = 'Search...', 
  onSelect = () => {},  
  debounceDelay = 300  
}) => {

  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [showList, setShowList] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search);
    }, debounceDelay);
    return () => clearTimeout(handler);
  }, [search, debounceDelay]);

  useEffect(() => {
    if (debouncedValue.trim() === '') {
      setFiltered(options);
    } else {
      const lower = debouncedValue.toLowerCase();
      const results = options.filter(opt => opt.toLowerCase().includes(lower));
      setFiltered(results);
    }
  }, [debouncedValue, options]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowList(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSearch(item);
    setShowList(false);
    onSelect(item);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '250px',
        margin: '40px auto',
        fontFamily: 'sans-serif',
        position: 'relative'
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowList(true);
        }}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />

      {showList && filtered.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderTop: 'none',
            maxHeight: '150px',
            overflowY: 'auto',
            zIndex: 10
          }}
        >
          {filtered.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
                backgroundColor: item === search ? '#f0f0f0' : 'white'
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {showList && filtered.length === 0 && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderTop: 'none',
            padding: '10px',
            color: 'gray',
            textAlign: 'center'
          }}
        >
          No results found
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
