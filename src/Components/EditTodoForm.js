import React, {useState} from 'react';

const EditTodoForm = ({editTask, task}) => {

const [value, setValue] = useState("")

const handleSubmit = event => {
    event.preventDefault()

    editTask(value, task.id)
    console.log(value)

    setValue("")
}

    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type='text' className='todoinput' value={value} onChange={(event) => setValue(event.target.value)} placeholder='Update Task' />
                <button type='submit' className='todobtn'>Update task</button>
            </form>
        </div>
    );
}

export default EditTodoForm;
