import { useState } from "react";

export default function CounterUndoRedo() {
  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);

  const currentValue = history[index];

  const updateValue = (newValue) => {
    const newHistory = history.slice(0, index + 1);
    setHistory([...newHistory, newValue]);
    setIndex(prev => prev + 1);
  };

  const undo = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  const redo = () => {
    if (index < history.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{currentValue}</h2>

      <button onClick={() => updateValue(currentValue + 1)}>
        Increment
      </button>

      <button onClick={() => updateValue(currentValue - 1)}>
        Decrement
      </button>

      <br /><br />

      <button onClick={undo} disabled={index === 0}>
        Undo
      </button>

      <button
        onClick={redo}
        disabled={index === history.length - 1}
      >
        Redo
      </button>
    </div>
  );
}

