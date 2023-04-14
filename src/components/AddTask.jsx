// //react component
// import React from 'react'

// import { useState } from 'react'



// function AddTodo  ({addNewTodo})  {
// const [title, setTitle] = useState('')
// const [content, setContent] = useState('')
// const createTodo = (titleName, content) => {
//     return {
//         title: titleName,
//         content: content,
//         completed: false
//     }
// }
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const newToDo = createTodo(title, content)
    
//     addNewTodo(newToDo)
//     setTitle('')
//     setContent('')
// }


//     return (
//         <div >
//             <form onSubmit={handleSubmit}>
//                 <h2>Add new todo:</h2>
//                 <label htmlFor="title">
//                 Title:
//                 <input
//                     id="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     type="text"
//                 />
//                 </label>
//                 <label htmlFor="content">
//                 Content:
//                 <input
//                     id="content"
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     type="text"
//                 />
//                 </label>
//                 <button type='submit'>Add</button>
//             </form>
//         </div>
//     )
// }

// export default AddTodo


import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ id: Date.now(), title, description, completed: false });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=
        "Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default AddTask;