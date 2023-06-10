import React, { useState } from "react";


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTask = () => {
      if (inputValue.trim() !== '') {
        setTasks([...tasks, inputValue]);
        setInputValue('');
      }
    };
  
    const handleDeleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };
  
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="task-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
          }
export default TodoList