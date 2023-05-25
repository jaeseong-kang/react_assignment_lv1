import { useDispatch } from "react-redux";
import { changeContent } from "../redux/modules/todo";

const ContentInputBox = () => {
  const style = {
    height: "36px",
    width: "250px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    textIndent: "1em",
  };

  const dispatch = useDispatch();

  const onChangeHandler = () => {
    let inputText = document.getElementById("contentInputBox").value;
    dispatch(changeContent(inputText));
  };
  return (
    <input style={style} id="contentInputBox" onChange={onChangeHandler} />
  );
};

export default ContentInputBox;
