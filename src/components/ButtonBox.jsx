import { useDispatch } from "react-redux";
import { deleteList, changeDone } from "../redux/modules/listSlice";



const ButtonBox = ({ ids, condition }) => {


  const dispatch = useDispatch();
  
  const deleteContent = () => {
    dispatch(deleteList(ids));
  };

  const doneChange = () => {
    dispatch(changeDone(ids));
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
        <button style={comCanBtnStyle} onClick={doneChange}>완료</button>
      ) : (
        <button style={comCanBtnStyle} onClick={doneChange}>취소</button>
      )}
    </div>
  );
};

export default ButtonBox;
