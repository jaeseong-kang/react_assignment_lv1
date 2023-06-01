import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeList } from "../redux/modules/listSlice";




const layoutStyle = {
    border: "2px solid rgb(238, 238, 238)",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",  
    justifyContent: "center",
    WebkitBoxAlign: "center",
    WebkitBoxPack: "center",
}

const editCardStyle = {
    width: "600px",
    height: "400px",
    border: "1px solid rgb(238, 238, 238)",
    display: "flex",
    flexDirection: "column",
    WebkitBoxPack: "justify",
    justifyContent: "flex-start",
}

const cardHeaderStyle = {
    display: "flex",
    height: "80px",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    padding: "0px 24px",
    WebkitBoxAlign: "center",
    alignItems: "center",
}

const btnsStyle = {
    display: "flex",
    gap: "5px"
}

const btnStyle = {
    border: "1px solid rgb(221, 221, 221)",
    height: "40px",
    width: "120px",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "12px",
    cursor: "pointer",
}

const contentStyle = {
    marginLeft: "20px",
}

const editInputTitleBoxStyle = {
    width: "550px",
    height: "30px"
}

const editInputContentBoxStyle = {
    width: "550px",
    height: "120px"
}

const Edit = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list = useSelector((state) => state.list.list);
    const edit = {...list.find((edit) => edit.id === parseInt(param.id))};


    const onTitleChangeHandler = () => {
        let inputText = document.getElementById("editTitleInputBox").value;
        edit.title = inputText;
      };

    const onContentChangeHandler = () => {
        let inputContent = document.getElementById("editContentInputBox").value;
        edit.content = inputContent;
      };

    const editList = () => {
        dispatch(changeList(edit));
    };


    return ( 
        <div style={{display: "block"}}>
            <div style={layoutStyle}>
                <div style={editCardStyle}>
                    <div style={cardHeaderStyle}>
                        <span>{`ID :${param.id}`}</span>
                        <div style={btnsStyle}>
                            <button style={btnStyle} onClick={editList}>수정하기</button>
                            <button onClick={() => navigate(-1)} style={btnStyle}>이전으로</button>
                        </div>
                    </div>
                    <div style={contentStyle}>
                        <h2>제목</h2>
                        <input style={editInputTitleBoxStyle} placeholder={edit.title} id="editTitleInputBox" onChange={onTitleChangeHandler} />
                        <h2>설명</h2>
                        <input style={editInputContentBoxStyle} placeholder={edit.content} id="editContentInputBox" onChange={onContentChangeHandler} />
                    </div>
                </div>
            </div>
        </div>
      );
};

export default Edit;