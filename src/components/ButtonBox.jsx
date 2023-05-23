import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ButtonBox = ({  ids, condition }) => {

  const data = useContext(TodoContext);

  const deleteContent = () => {
    const newList = data.list.filter((obj) => obj.id !== ids);
    data.setList(newList);
  };

  const completeContent = () => {
    data.setList((list) =>
      list.map((item) => {
        if (item.id === ids) {
          return { ...item, isDone: true };
        }
        return item;
      })
    );
  };

  const cancelContent = () => {
    data.setList((list) =>
      list.map((item) => {
        if (item.id === ids) {
          return { ...item, isDone: false };
        }
        return item;
      })
    );
  };

  const btnBlock = {
    display: "flex",
    gap: "10px"
  }

  const deleteBtnStyle = {
    border: "2px solid red",
    borderRadius: "10px",
    backgroundColor: "white",
    width: "130px",
    height: "35px",
    fontSize: "12px",
    padding: "1px 10px"
  };

  const comCanBtnStyle = {
    border: "2px solid green",
    borderRadius: "10px",
    backgroundColor: "white",
    width: "130px",
    height: "35px",
    fontSize: "12px",
    padding: "1px 10px"
  };

  return (
    <div style={btnBlock}>
      <button style={deleteBtnStyle} onClick={deleteContent}>삭제</button>
      {condition === false ? (
        <button style={comCanBtnStyle} onClick={completeContent}>완료</button>
      ) : (
        <button style={comCanBtnStyle} onClick={cancelContent}>취소</button>
      )}
    </div>
  );
};

export default ButtonBox;
