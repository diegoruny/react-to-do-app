//react component



function TodoItem  (key, alltoDos) {
    const item = alltoDos[key]
    const content = item.content
    
    return (
        <>
            <div>
                <p>Todo Item</p>
                <input type="checkbox" />
                <p>{content}</p>
                <button>Edit</button>
                <button>Delete</button>
            
            </div>
        </>
        
    )
}

export default TodoItem
