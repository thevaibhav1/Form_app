import React, { useState } from "react";
import TaskBoard from "./Components/TaskBoard";
import FilterBar from "./Components/FilterBar";
import AddTaskModal from "./Components/AddTaskModal";
import "./App.css";
import SelectOption from "./Components/SelectOption";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ category: "", dueDate: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesCategory = filter.category
      ? task.category === filter.category
      : true;
    const matchesDueDate = filter.dueDate
      ? task.dueDate === filter.dueDate
      : true;
    return matchesCategory && matchesDueDate;
  });

  return (
    <div className="App">
      <header className="header">
        <h1>TaskBuddy</h1>
        <div className="user-info">
          <button>Login</button>
        </div>
      </header>
      <SelectOption />
      <FilterBar setFilter={setFilter} />
      <TaskBoard
        tasks={filteredTasks}
        addTask={addTask}
        updateTaskStatus={updateTaskStatus}
      />
      {isModalOpen && (
        <AddTaskModal onAdd={addTask} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
