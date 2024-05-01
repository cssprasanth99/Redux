import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoList = () => {
  const todo = useSelector((store) => store.todo);

  const [inputData, setInputData] = useState({});
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputData({ title: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "ADD", payload: inputData })}>
        Add
      </button>
      {todo.map((data, index) => (
        <div key={index}>{data.title}</div>
      ))}
    </div>
  );
};
