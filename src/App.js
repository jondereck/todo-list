import React, { useState } from "react";

function App() {
    const [tasks, setTasks] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')

    const handleInputTask = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTask = () => {
        if (inputValue !== '') {
            setTasks([...tasks, inputValue])
            setInputValue('')
        }
    }
    
    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks)
    }

    return (
        <div className="App"> 
            <h1>To-do List 3</h1>
            <div className="task-container">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputTask}
                    placeholder="Enter a task"
                />
            <button onClick={handleAddTask}>Add Task</button>
            </div>
        
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index}>{task}
                         <button onClick={handleDeleteTask}>Delete</button>
                        </li>
                    ))}

                   
                </ul>

            
        </div>
    );

}

export default App