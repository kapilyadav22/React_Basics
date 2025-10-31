import React, { useState } from "react";
import './styles.css'


function ChipsInput() {
  const [inputField, setInputField] = useState("");
  const [chips, setChips] = useState([]);

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  }

  const handleCloseChip =  (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  }

  const handleAddChips = (e) => {
    if (e.key === 'Enter' && inputField.trim()!=="") {
      setChips(prev => [...prev, inputField]);
      setInputField("");
      }
  }

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        onChange={handleInputChange}
        onKeyDown = {handleAddChips}
      />
      <div style={{display : 'flex'}}>
        {chips.map((chip,index) => {
          return <div
            key = {index}
            style={{
              display: "flex",
              background: 'grey',
              margin: '2px',
              border: 'solid blue 1px',
              borderRadius :  '5px',
            }}
          >
            <span key = {"chip"+index}>{chip}</span>
            <button
              key = {index}
              onClick={() => handleCloseChip(index)}
              style={{
                background: "transparent",
                border: "none",
                marginLeft: "7px",
                cursor: 'pointer',
                color: "red",
              }}
            >X
            </button>
          </div>
        })}
      </div>

    </div>
  );
}

export default ChipsInput;