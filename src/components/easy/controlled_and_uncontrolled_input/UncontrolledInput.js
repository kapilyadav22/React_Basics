import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <label>
        Uncontrolled Input
        <input type="text" ref={inputRef} />
      </label>

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default UncontrolledInput;


/*
🔹 Uncontrolled Inputs — When to Use

👉 Use uncontrolled inputs when you only need the value at submit time.

✅ Best use cases
  Simple forms
  One-off inputs
  Search boxes without validation
  Performance-sensitive fields
  Legacy integrations
  File inputs (<input type="file" />)

✅ Why?
Fewer re-renders
Less boilerplate
DOM manages state efficiently


🚫 Trade-off
Harder validation
Less control
Imperative access via ref

Interview line:
“I use uncontrolled inputs for simple or performance-critical cases where React doesn’t need to react to every keystroke.”
*/