import React, { useState } from 'react';

function EditTask({ taskToEdit, editTask }) {
  const [title, setTitle] = useState(taskToEdit.title);
  const [description, setDescription] = useState(taskToEdit.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    editTask({ ...taskToEdit, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setTaskToEdit(null)}>
        Cancel
      </button>
    </form>
  );
}

export default EditTask;