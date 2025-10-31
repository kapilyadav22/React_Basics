import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  }
  const handleAddButton = () => {
    if (value.trim() === "") return;
    const item = {
      id: task.length + 1,
      text: value.trim(),
      isCompleted: false
    }
    setTask((prev) => ([
      ...prev,
      item,
    ]
    ));
    setValue('');
  }

  const handleDelete = (id) => {
    setTask(task =>
      task.filter(t => (t.id !== id))
    );
  };

  const handleCheckBoxChange = (id) => {
    setTask(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={value}
          placeholder = "Enter todo"
          onChange={handleInputChange}
        ></input>
        <button
          onClick={handleAddButton}
        >Add</button>
      </div>
      <ul>
        {task.map((ele) => {
          return <li key={ele.id}>
            <input type='checkbox'
              onClick={() => handleCheckBoxChange
                (ele.id)}
              checked={ele.isCompleted}
            ></input>
            <span
              style={{
                textDecoration: ele?.isCompleted ? "line-through" : "none",
                cursor: "pointer",
              }}
            >{ele.text}</span>
            <button
              onClick={() => handleDelete(ele.id)}
            >Delete</button>
          </li>

        })
        }
      </ul>

    </div>
  );
}

export default TodoList;