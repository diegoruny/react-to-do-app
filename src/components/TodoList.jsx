//react component
import React from 'react'
import '../App.css'

function TodoList  (props)  {
    
    const prueba = (elementIndex) => {
        alert(props.alltoDos[elementIndex].completed)
    }
const list = props.alltoDos.map((toDos, index) => {
    return (
        <div className={`list-card${toDos.completed ? ' completed-card' : ''}`} elementindex={index} key={index}>
            <input type="checkbox"  onChange={() => props.completeToDo(index)} />
            <a href='#' onClick={() => prueba(index)} elementindex={index}>
                <h3><strong>{toDos.title}</strong></h3>
                <p>{toDos.content}</p>
            </a>
            <button onClick={() => props.deleteItem(index)} >Delete</button>
        </div>
        );
    });
    
return (
    <div className='list-container'>
        <h1>Don't do List</h1>
        {list}
    </div>
)
}






    


export default TodoList