//react component
import React from 'react'

import { useState } from 'react'



function AddTodo  ({addNewTodo})  {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const createTodo = (titleName, content) => {
    return {
        title: titleName,
        content: content,
        completed: false
    }
}
const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = createTodo(title, content)
    
    addNewTodo(newToDo)
    setTitle('')
    setContent('')
}


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h2>Add new todo:</h2>
                <label htmlFor="title">
                Title:
                <input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                />
                </label>
                <label htmlFor="content">
                Content:
                <input
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                />
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTodo