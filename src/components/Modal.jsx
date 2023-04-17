import React from 'react'
import EditTask from './EditTask'
import AddTask from './AddTask'


function Modal({toogleModal, addTask, taskToEdit, editTask, setTaskToEdit}) {
    const handleClose = () => {
        setTaskToEdit(null);
        toogleModal();
      };
    
  return (
    <div>
        <div className='modal modal-open'>
            <div className='modal-box relative'>
                <button className='btn btn-error absolute top-2 right-2 rounded-full btn-sm' onClick={ () => handleClose()}>X</button>
                { taskToEdit ? 
                <EditTask taskToEdit={taskToEdit} editTask={editTask} toogleModal={toogleModal}/>
                 : <AddTask addTask={addTask} toogleModal={toogleModal}/> }
            </div>
        </div>
    </div>
  )
}

export default Modal