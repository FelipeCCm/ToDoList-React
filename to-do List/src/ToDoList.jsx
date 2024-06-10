import { useState } from "react"
function ToDoList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) {
    setNewTask(e.target.value)
  }

  function enterKeyDown(i) {
    i.key === 'Enter' ? addTask() : '';
  }

  function addTask(){
    if(newTask.trim() !== '')  {
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(i){
    const updatedTasks = tasks.filter((_, index) => index !== i);
    setTasks(updatedTasks);
  }

  function moveTaskUp(i){
    if(i > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i - 1]] = [updatedTasks[i - 1], updatedTasks[i]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(i){
    if(i < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]];
      setTasks(updatedTasks);
    }
  }

  return(
  <div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
      <input type="text" placeholder="Enter an task..." value={newTask} 
        onChange={handleInputChange} onKeyDown={enterKeyDown}/>
      <button className="add-button" onClick={addTask}>
        Add 
      </button>
    </div>
    <ol>
      {tasks.map((task, i) => 
      <li key={i}>
        <span className="text">{task}</span>
        <button className="delete-button" onClick={() => deleteTask(i)}>
          Delete
        </button>

        <button className="move-button" onClick={() => moveTaskUp(i)}>
          ☝️
        </button>

        <button className="move-button" onClick={() => moveTaskDown(i)}>
          👇
        </button>
      </li>)}
    </ol>
  </div>)
}

export default ToDoList