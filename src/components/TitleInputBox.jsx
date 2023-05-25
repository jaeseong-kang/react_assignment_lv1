import { useDispatch } from "react-redux";

import { changeTitle } from "../redux/modules/todo";

const TitleInputBox = () => {
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
    let inputText = document.getElementById("titleInputBox").value;
    dispatch(changeTitle(inputText));
  };
  return <input style={style} id="titleInputBox" onChange={onChangeHandler} />;
};

export default TitleInputBox;
