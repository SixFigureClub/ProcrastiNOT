import React from 'react';

const MainTaskLists = ({data}) => {
    return (
    <div className="TaskContainer">
      {data.map((column, index) => {
        const key = `${column.name}-${index}`
        return (
          <div key={key} className='column'>
            <div>{column.name}</div>
            {/* render column children here */}
          </div>
        )
      })}  
    </div>
  );
};

export default MainTaskLists;