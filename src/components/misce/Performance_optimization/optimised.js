import React, { useState, useCallback, useMemo } from "react";

const Child = React.memo(({ onIncrement, count }) => {
  console.log(" Child rendered");
  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={onIncrement}>Increment Child Count</button>
    </div>
  );
});

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parent rendered");

  const handleChildIncrement = useCallback(() => {
    setChildCount((prev) => prev + 1);
  }, []);

  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum + parentCount;
  }, [parentCount]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Optimized Example</h2>

      <p>Parent Count: {parentCount}</p>
      <p>Expensive Value: {expensiveValue}</p>

      <button onClick={() => setParentCount((prev) => prev + 1)}>
        Increment Parent Count
      </button>

      <hr />
      <Child count={childCount} onIncrement={handleChildIncrement} />
    </div>
  );
};

export default Parent;
