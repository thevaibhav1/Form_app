import React,{useState} from 'react';
import AddTaskModal from './AddTaskModal.jsx';
import './FilterBar.css';
function FilterBar({ setFilter,addTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCategoryChange = (e) => {
    setFilter(prev => ({ ...prev, category: e.target.value }));
  };

  const handleDueDateChange = (e) => {
    setFilter(prev => ({ ...prev, dueDate: e.target.value }));
  };


  return (
    <div className="filter-bar">
      <div className="filter">
        <label>Filter by: </label>
        <select onChange={handleCategoryChange}>
          <option value="">Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <select onChange={handleDueDateChange}>
          <option value="">Due Date</option>
          <option value="2025-03-26">2025-03-26</option>
          <option value="2025-03-27">2025-03-27</option>
        </select>
      </div>
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>
        Add Task
      </button>
      {isModalOpen && (
              <AddTaskModal
                onClose={() => setIsModalOpen(false)}
                onAdd={addTask}
              />
            )}
    </div>
  );
}

export default FilterBar;