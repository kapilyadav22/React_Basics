import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7'
    }}>
      <h1>React Counter App</h1>
      <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>{count}</h2>
      <div>
        <button
          onClick={handleDecrement}
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          +
        </button>
        <button
          onClick={handleReset}
          style={{ margin: '5px', padding: '10px 20px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
