import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ContentInputBox = () => {

  const style = {
    height: "36px",
    width: "250px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    textIndent: "1em"
  }
  
    const data = useContext(TodoContext);

    const onChangeHandler = () => {
        let inputText = document.getElementById("contentInputBox").value;
        let newTodo = {...data.todo};
        newTodo["content"] = inputText;
        data.setTodo(newTodo);
      };
      return <input style={style} id="contentInputBox" onChange={onChangeHandler} />;
    };

export default ContentInputBox;