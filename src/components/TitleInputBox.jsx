const TitleInputBox = ({todo,setTodo}) => {
  const onChangeHandler = () => {
    let inputText = document.getElementById("titleInputBox").value;
    let newTodo = {...todo};
    newTodo["title"] = inputText;
    setTodo(newTodo);
  };
  return <input id="titleInputBox" onChange={onChangeHandler} />;
};

export default TitleInputBox;
