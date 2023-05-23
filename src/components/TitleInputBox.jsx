import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TitleInputBox = () => {
  
  const data = useContext(TodoContext);

  const onChangeHandler = () => {
    let inputText = document.getElementById("titleInputBox").value;
    let newTodo = {...data.todo};
    newTodo["title"] = inputText;
    data.setTodo(newTodo);
  };
  return <input id="titleInputBox" onChange={onChangeHandler} />;
};

export default TitleInputBox;
