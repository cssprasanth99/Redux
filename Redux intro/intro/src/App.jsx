import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "./TodoList";

function App() {
  const data = useSelector((store) => store.theme);
  console.log(data);
  const dispatch = useDispatch();

  function handleToggleLight() {
    dispatch({ type: "LIGHT" });
  }

  function handleToggleDark() {
    dispatch({ type: "DARK" });
  }

  return (
    <>
      <div>
        {JSON.stringify(data)}
        <button onClick={handleToggleLight}>Light</button>
        <button onClick={handleToggleDark}>Dark</button>
        <TodoList />
      </div>
    </>
  );
}

export default App;
