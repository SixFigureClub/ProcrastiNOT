import React from 'react';

// Main component for rendering task lists
const MainTaskLists = ({data}) => {
    return (
    <div className="TaskContainer">
      {data.map((column, index) => {
        const key = `${column.name}-${index}`
        return (
          <div key={key} className='column'>

            {/* Displaying the name of the task list */}
            <div className='column-name'>{column.name}</div>

            {/* Displays the description of the task list */}
            <div className='column-description'>{column.description}</div>

            {/* render column children here (new tasks) */}
          </div>
        )
      })}  
    </div>
  );
};

export default MainTaskLists;