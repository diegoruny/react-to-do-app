import React from 'react';

function Task({toogleModal, task, deleteTask, toggleTaskCompletion, setTaskToEdit }) {
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
  const handleEdit = () => {
    setTaskToEdit(task);
    toogleModal();
  }
  return (
    <li className="card card-compact w-64 bg-neutral text-neutral-content">
      
        <div className='card-body text-center flex-shrink-0 shadow-2xl'>
          <div className='flex justify-end'>
            {/* <label htmlFor="casualisimo">{`Status: ${task.completed}`}</label> */}
            <input
            id='casualisimo'
            className='checkbox checkbox-sm checkbox-success'
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            />
          </div>
          <h2 className='card-title justify-center'>{toTitleCase(task.title)}</h2>
          <p >{capitalizeFirst(task.description)}</p>
            <div className='card-actions justify-around '>
              <button className='btn btn-primary' onClick={handleEdit}>Edit</button>
              <button className="btn btn-secondary" onClick={() => deleteTask(task.id)}>Delete</button>

        </div>
        </div>
      
    </li>
  );
}

export default Task;

