import React, { useState } from "react";
import { toast } from "react-hot-toast";

function EditTask({ taskToEdit, editTask, toogleModal }) {
  const [title, setTitle] = useState(taskToEdit.title);
  const [description, setDescription] = useState(taskToEdit.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    editTask({ ...taskToEdit, title, description });
    toogleModal();
    toast.success("Task edited successfully");
  };

  return (
    <>
      <form className="form-control gap-2 p-4 items-center" onSubmit={handleSubmit}>
        <input
          className="input-bordered input w-full max-w-xs"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-bordered input w-full max-w-xs"
          type="text"
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-success btn btn-wide" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default EditTask;
