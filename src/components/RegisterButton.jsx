import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const RegisterButton = () => {
  
  const data = useContext(TodoContext);

  const registerButtonhandler = () => {
    data.setList([...data.list, data.todo]);
    data.todo.id +=1;
  };
  return <button onClick={registerButtonhandler}>추가하기</button>;
};

export default RegisterButton;
