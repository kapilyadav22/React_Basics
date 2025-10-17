import React, { useState } from "react";

const Child = ({ onIncrement, count }) => {
  console.log("Child rendered 👶");
  return (
    <div>
      <p>Child Count: {count}</p>
      <button onClick={onIncrement}>Increment Child Count</button>
    </div>
  );
};

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parent rendered 👨‍👧");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Without Optimization</h2>
      <p>Parent Count: {parentCount}</p>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment Parent Count
      </button>
      <hr />
      <Child count={childCount} onIncrement={() => setChildCount(childCount + 1)} />
    </div>
  );
};

export default Parent;

