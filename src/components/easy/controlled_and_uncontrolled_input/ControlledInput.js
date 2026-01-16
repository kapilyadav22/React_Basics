import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <label>
        Controlled Input
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>

      <p>Value: {value}</p>
    </div>
  );
}

export default ControlledInput;


/*
🔹 Controlled Inputs — When to Use
 Use controlled inputs when React must “own” the data.

Best use cases: 

  Forms with validation
  Conditional UI (enable/disable, show/hide)
  Dependent fields (country → state)
  Real-time feedback (character count, formatting)
  Business-critical data (auth, payments)
  Complex forms & wizards
  When integrating with form libraries

✅Why?
React is the single source of truth
Predictable state updates
Easier debugging & testing


🚫 Trade-off
More re-renders
Slightly more code

Interview line:
“I use controlled inputs when I need validation, predictability, or UI logic driven by input state.”
*/