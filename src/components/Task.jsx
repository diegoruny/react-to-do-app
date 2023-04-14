import React from 'react';

function Task({ task, deleteTask, toggleTaskCompletion, setTaskToEdit }) {
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  function toTitleCase(str) {
    const titleCase = str
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  
    return titleCase;
  }
  return (
    <li className="card w-64 bg-neutral text-neutral-content">
      
        <div className='card-body text-center'>
          <div className='flex justify-end'>
            <input
            className='checkbox checkbox-sm checkbox-success'
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            />
          </div>
          <h2 className='card-title justify-center'>{toTitleCase(task.title)}</h2>
          <p >{capitalizeFirst(task.description)}</p>
            <div className='card-actions justify-around '>
              <button className='btn btn-primary' onClick={() => setTaskToEdit(task)}>Edit</button>
              <button className="btn btn-secondary" onClick={() => deleteTask(task.id)}>Delete</button>

        </div>
        </div>
      
    </li>
  );
}

export default Task;

