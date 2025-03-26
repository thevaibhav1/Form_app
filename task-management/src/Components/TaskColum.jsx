import React from 'react';
import TaskCard from './TaskCard.jsx';
import './TaskColum.css';
function TaskColumn({ title, status, color, tasks, updateTaskStatus }) {
  return (
    <div className="task-column" style={{ backgroundColor: color }}>
      <h3>{title} ({tasks.length})</h3>
      {tasks.length === 0 ? (
        <p>No Tasks in {title}</p>
      ) : (
        tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))
      )}
    </div>
  );
}

export default TaskColumn;