import React from 'react';

function Task({ task, deleteTask, toggleTaskCompletion, setTaskToEdit }) {
  return (
    <li className="card w-20 bg-base-100 shadow-xl ">
      <input
        className='checkbox checkbox-sm absolute right-0 top-0 m-4'
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />

        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{task.title}</h2>
          <p >{task.description}</p>
            <div className='card-actions justify-center'>
              <button className='btn btn-primary' onClick={() => setTaskToEdit(task)}>Edit</button>
              <button className="btn btn-secondary" onClick={() => deleteTask(task.id)}>Delete</button>

        </div>
        </div>
      
    </li>
  );
}

export default Task;

