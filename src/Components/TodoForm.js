import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        addTodo(value)
         setValue("")
         
        console.log(value)
    }
    return (
        <div>
            <form className='todoform' onSubmit={handleSubmit}>
                <input type='text' className='todoinput'
              value={value}
                onChange={(event) => console.log(event.target.value)}
                />
                <button type="submit" className='todobtn'>Add Task</button>
            </form>
        </div>
    );
}

export default TodoForm;
