import { useDispatch, useSelector } from "react-redux";
import { appendList } from "../redux/modules/listSlice";
import { plusOneId } from "../redux/modules/todoSlice";

const RegisterButton = () => {

  const style = {
    padding: "10px 50px 10px 50px",
    backgroundColor: "#008080",
    borderRadius: "10px",
    border: "none",
    color: "white",
  };

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  const registerButtonhandler = () => {
    console.log(todo);
    dispatch(appendList(todo));
    dispatch(plusOneId());
  };

  return (
    <button style={style} onClick={registerButtonhandler}>
      추가하기
    </button>
  );
};

export default RegisterButton;
