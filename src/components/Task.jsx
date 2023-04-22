import React from "react";

function Task({
  toogleModal,
  task,
  deleteTask,
  toggleTaskCompletion,
  setTaskToEdit,
}) {
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function toTitleCase(str) {
    const titleCase = str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return titleCase;
  }
  const handleEdit = () => {
    setTaskToEdit(task);
    toogleModal();
  };
  return (
    <li
      className={`card-compact card w-64 bg-primary-content text-neutral-content ${
        task.completed ? "bg-neutral-focus" : ""
      } `}
    >
      <div className="card-body flex-shrink-0 text-center shadow-2xl">
        <div className="flex justify-between">
          
          {task.completed ? (
            <span className="badge-success badge ">Completed</span>
          ) : (
            <span className="badge-error badge ">Pending</span>
          )}

          <input
            id="casualisimo"
            className="checkbox-success checkbox checkbox-sm "
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
        </div>
        <h2
          className={`card-title justify-center ${
            task.completed ? "line-through" : ""
          }`}
        >
          {toTitleCase(task.title)}
        </h2>
        <p className={`${task.completed ? "line-through" : ""}`}>
          {capitalizeFirst(task.description)}
        </p>
        <div className="card-actions justify-around ">
          {task.completed ? (
            <button
              className="btn-secondary btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          ) : (
            <button className="btn-primary btn" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default Task;
