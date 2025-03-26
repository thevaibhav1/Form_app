import React, { useState } from 'react';
import './AddTaskModal.css';

function AddTaskModal({ onClose, onAdd }) {
  const [task, setTask] = useState({
    name: '',
    dueDate: '',
    status: 'todo',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onAdd === 'function') {
      onAdd({ ...task, id: Date.now() }); 
    } else {
      console.error('onAdd is not a function');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task name"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            required
          />
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            required
          />
          <select
            value={task.category}
            onChange={(e) => setTask({ ...task, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
