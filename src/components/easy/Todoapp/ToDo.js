import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;

    setTasks(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: value.trim(),
        isCompleted: false,
      },
    ]);

    setValue("");
  };

  const handleDelete = (id) => {
    if(id){
      setTasks(prev => prev.filter(task => task.id !== id));
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Enter todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul >
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
