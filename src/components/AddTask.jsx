import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function AddTask({ addTask, toogleModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ id: Date.now(), title, description, completed: false });
    setTitle('');
    setDescription('');
    toogleModal();
    toast.success('Task added successfully')
  };

  return (
    
      <form className='flex flex-col gap-2 p-4 items-center ' onSubmit={handleSubmit}>
      <input
        className='input input-bordered w-full max-w-md'
        type="text"
        placeholder=
        "Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className='input input-bordered w-full max-w-md'
        type="text"
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button className='btn btn-success btn-wide' type="submit">Add Task</button>
    </form>
    
  );
}
export default AddTask;