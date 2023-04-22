import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

import Modal from "./components/Modal";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || '[]')
  );
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error("Task deleted successfully");
  };

  //Modal section

  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Toast section
  // const notify = () => toast('Here is your toast.');

  return (
    <div className="flex min-w-fit flex-col items-center p-4">
      <h1 className="mb-8 mt-8 text-center text-5xl font-bold">To-do App</h1>
      <div className="divider"></div>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        setTaskToEdit={setTaskToEdit}
        toogleModal={toogleModal}
      />
      {modal === true && (
        <Modal
          taskToEdit={taskToEdit}
          toogleModal={toogleModal}
          addTask={addTask}
          editTask={editTask}
          setTaskToEdit={setTaskToEdit}
        />
      )}
      <div className="tooltip tooltip-left" data-tip="Add new task">
        <button
          className="btn-primary btn rounded-full text-xl"
          onClick={toogleModal}
        >
          +
        </button>
      </div>

      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            success: {
              style: {
                background: "hsl(var(--su))",
              },
              error: {
                style: {
                  background: 'hsl(var(--ac))',
                },
              },
              warning: {
                style: {
                  background: "hsl(var(--wa))",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
