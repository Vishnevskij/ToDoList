import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  const createNewTask = () => {
    if (newName && newTask) {
      setTasks([...tasks, { name: newName, task: newTask }]);
      setNewName("");
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((el, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(search.toLowerCase()) ||
      task.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>ToDo List</h1>
      <input className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="forma">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
        />
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button onClick={createNewTask}>Create task</button>
      </div>

      {filteredTasks ? filteredTasks.map((task, index) => (
        <div className="item" key={task.name + "-" + task.task}>
          <h3>{task.name}</h3>
          <h4>{task.task}</h4>
          <button onClick={() => deleteTask(index)}>Delete task</button>
        </div>
      )) : tasks.map((task, index) => (
        <div className="item" key={task.name + "-" + task.task}>
          <h3>{task.name}</h3>
          <h4>{task.task}</h4>
          <button onClick={() => deleteTask(index)}>Delete task</button>
        </div>
      ))}

    </div>
  );
}

export default App;