import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (id) => {
    setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
  };
  const editTodoTask = (task, id ) => {
    setTodos(
        todos.map((todo) => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
         }: todo )
    )
  }

  return (
    <div className="TodoWrapper">
      <h1>Get task Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
            <EditTodoForm editTask={editTodoTask} task={todo}/>
        ) : (
            <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
            
          /> 
        )
      
      ))}
    </div>
  );
};

export default TodoContainer;
