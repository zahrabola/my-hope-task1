import React from "react";

const Todo = ({task}) => {
  return (
    <div>
      <p>{task.task}</p>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Todo;
