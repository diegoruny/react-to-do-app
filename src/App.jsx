import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

import './App.css'

function App() {
  const [alltoDos, setAlltoDos] = useState([])
  const addNewTodo = (newTodo) => {
    setAlltoDos([...alltoDos, newTodo])
}
const deleteItem = (elementindex) => {
  const newTodos = alltoDos.filter((toDos, i) => i !== elementindex);
  setAlltoDos(newTodos);
}
//Define toggleTask function to update a task's 
// completion status in the state
const completeToDo = (elementindex) => {

  const newTodos = [...alltoDos];
  newTodos[elementindex].completed = newTodos[elementindex].completed ? false : true;
  
  setAlltoDos(newTodos);
  

}

  return (
    <div className="App">
      <TodoList alltoDos={alltoDos} deleteItem={deleteItem} completeToDo={completeToDo} />
      <AddTodo addNewTodo={addNewTodo}/>
      {/* <TodoItem alltoDos = {alltoDos} /> */}
    </div>
  )
}

export default App
