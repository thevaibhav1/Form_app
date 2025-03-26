import React, { useState } from 'react';
import TaskColumn from './TaskColum.jsx';
import './TaskBoard.css';
function TaskBoard({ tasks, updateTaskStatus }) {

  const columns = [
    { title: 'To-Do', status: 'todo', color: '#f8e1e9' },
    { title: 'In-Progress', status: 'in-progress', color: '#e1f0fa' },
    { title: 'Completed', status: 'completed', color: '#e1f8e1' },
  ];

  return (
    <div className="task-board">
      <div className="columns">
        {columns.map(column => (
          <TaskColumn
            key={column.status}
            title={column.title}
            status={column.status}
            color={column.color}
            tasks={tasks.filter(task => task.status === column.status)}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;