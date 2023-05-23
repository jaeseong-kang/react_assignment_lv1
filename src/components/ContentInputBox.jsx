import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ContentInputBox = () => {
  
    const data = useContext(TodoContext);

    const onChangeHandler = () => {
        let inputText = document.getElementById("contentInputBox").value;
        let newTodo = {...data.todo};
        newTodo["content"] = inputText;
        data.setTodo(newTodo);
      };
      return <input id="contentInputBox" onChange={onChangeHandler} />;
    };

export default ContentInputBox;