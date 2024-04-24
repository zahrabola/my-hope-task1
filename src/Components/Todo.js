import React from "react";

const Todo = ({task, toggleComplete, deleteTask, editTask}) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : "incompleted"}`}
      onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <button onClick={() => editTask(task.id)}>edit</button>
        <button onClick={() => deleteTask(task.id)}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
