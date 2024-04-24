import React from "react";

const Todo = ({task, toggleComplete, deleteTask }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : "incompleted"}`}
      onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <button>edit</button>
        <button onClick={() => deleteTask(task.id)}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
