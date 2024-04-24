import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {

const [value, setValue] = useState("")

const handleSubmit = event => {
    event.preventDefault()

    addTodo(value)
    console.log(value)

    setValue("")
}

    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type='text' placeholder='Tasks for today' className='todoinput' value={value} onChange={(event) => setValue(event.target.value)} />
                <button type='submit' className='todobtn'>Add todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
