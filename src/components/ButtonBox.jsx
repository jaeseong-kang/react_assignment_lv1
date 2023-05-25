import { useSelector, useDispatch } from "react-redux";
import { changeList } from "../redux/modules/list";



const ButtonBox = ({ ids, condition }) => {


  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const deleteContent = () => {
    const newList = list.filter((obj) => obj.id !== ids);
    dispatch(changeList(newList));
  };

  const completeContent = () => {
    const newList = list.map((item) => {
        if (item.id === ids) {
          return { ...item, isDone: true };
        }
        return item;
      });
    dispatch(changeList(newList));
  };

  const cancelContent = () => {
    const newList = list.map((item) => {
        if (item.id === ids) {
          return { ...item, isDone: false };
        }
        return item;
      });
    dispatch(changeList(newList));
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
