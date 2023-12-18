import React, { useState } from 'react';

const TaskSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    { id: 3, name: 'Task 3', description: 'Description for Task 3' },
    
  ]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter 
    const filteredTasks = tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query)
    );

    setSearchResults(filteredTasks);
  };

  return (
    <div>
      <h2>Task Search</h2>
      <input
        type="text"
        placeholder="Search for tasks..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong>: {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;