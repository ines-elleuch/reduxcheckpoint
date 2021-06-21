import React from "react";

import { useSelector } from "react redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoreducer.todoList);
  return (
    <div>
      {todoList.map((todo) => (
        <div>
          <span>(todo.text)</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
