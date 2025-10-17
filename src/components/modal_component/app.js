import React, { useState } from "react";
import Modal from "./modal";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Modal Example</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Modal Title</h3>
        <p>This is a reusable modal component using React Portal.</p>
      </Modal>
    </div>
  );
};

export default App;
