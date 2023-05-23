const ContentInputBox = ({todo,setTodo}) => {
    const onChangeHandler = () => {
        let inputText = document.getElementById("contentInputBox").value;
        let newTodo = {...todo};
        newTodo["content"] = inputText;
        setTodo(newTodo);
      };
      return <input id="contentInputBox" onChange={onChangeHandler} />;
    };

export default ContentInputBox;