import React from 'react';
import './TaskCard.css';
function TaskCard({ task, updateTaskStatus }) {
  const handleStatusChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  return (
    <div className="task-card">
      <p>{task.name}</p>
      <p>Due on: {task.dueDate}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="todo">To-Do</option>
        <option value="in-progress">In-Progress</option>
        <option value="completed">Completed</option>
      </select>
      <p>Category: {task.category}</p>
    </div>
  );
}

export default TaskCard;