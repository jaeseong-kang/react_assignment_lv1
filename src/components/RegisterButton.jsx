import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const RegisterButton = () => {

  const style = {
    padding: "10px 50px 10px 50px",
    backgroundColor: "#008080",
    borderRadius: "10px",
    border:"none",
    color: "white"
  };
  
  const data = useContext(TodoContext);

  const registerButtonhandler = () => {
    data.setList([...data.list, data.todo]);
    data.todo.id +=1;
  };
  return <button style={style} onClick={registerButtonhandler}>추가하기</button>;
};

export default RegisterButton;
