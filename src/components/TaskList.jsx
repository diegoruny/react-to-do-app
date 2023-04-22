import React from "react";
import Task from "./Task";


function TaskList({
  toogleModal,
  tasks,
  deleteTask,
  toggleTaskCompletion,
  setTaskToEdit,
}) {
  return (
    <ul className="flex flex-wrap justify-evenly gap-4 p-4">
      {tasks.map((task) => (
        <Task
          toogleModal={toogleModal}
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
