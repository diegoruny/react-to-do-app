// import { useState } from 'react'
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
// import TodoItem from './components/TodoItem'

// import './App.css'

// function App() {
//   const [alltoDos, setAlltoDos] = useState([])
//   const addNewTodo = (newTodo) => {
//     setAlltoDos([...alltoDos, newTodo])
// }
// const deleteItem = (elementindex) => {
//   const newTodos = alltoDos.filter((toDos, i) => i !== elementindex);
//   setAlltoDos(newTodos);
// }
// //Define toggleTask function to update a task's 
// // completion status in the state
// const completeToDo = (elementindex) => {

//   const newTodos = [...alltoDos];
//   newTodos[elementindex].completed = newTodos[elementindex].completed ? false : true;
  
//   setAlltoDos(newTodos);
  

// }

//   return (
//     <div className="App">
//       <TodoList alltoDos={alltoDos} deleteItem={deleteItem} completeToDo={completeToDo} />
//       <AddTodo addNewTodo={addNewTodo}/>
//       <TodoItem key={alltoDos.id} todos={alltoDos}
//         deleteTask = {deleteItem} toggleTaskCompletion={completeToDo} setTaskToEdit={''}
//       />
//     </div>
//   )
// }

// export default App



import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1 className='self'>To-do App</h1>
      <AddTask addTask={addTask} />
      {taskToEdit && (
        <EditTask taskToEdit={taskToEdit} editTask={editTask} />
      )}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
}

export default App;
