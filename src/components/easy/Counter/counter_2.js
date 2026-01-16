import { useState } from "react";

//better readability, optimised code
const App = () => {
  const [counter, setCounter] = useState(0);

  const Actions = {
    increment: (prev) => prev + 1,
    decrement: (prev) => (prev > 0 ? prev - 1 : 0),
    reset: ()=> 0,
  };

  const handleClick = (action) => {
    const updater = Actions[action];
  if (updater) setCounter(updater);
  };

  return (
    <div>
      <h1>Counter value : {counter}</h1>
      {Object.keys(Actions).map((action)=>{ return (
          <button key={action} onClick={() => handleClick(action)}>
            {action}
          </button>
      )
          }) }
    </div>
  );
};

export default App;
