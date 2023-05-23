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

  return (
    <div>
      <button onClick={deleteContent}>삭제</button>
      {condition === false ? (
        <button onClick={completeContent}>완료</button>
      ) : (
        <button onClick={cancelContent}>취소</button>
      )}
    </div>
  );
};

export default ButtonBox;
