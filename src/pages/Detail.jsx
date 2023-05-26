import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";



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

const detailCardStyle = {
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

const btnStyle = {
    border: "1px solid rgb(221, 221, 221)",
    height: "40px",
    width: "120px",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "12px",
    cursor: "pointer",
}


const h1Style = {
    padding: "0px, 24px",
    marginLeft: "24px"
}

const mainStyle = {
    padding: "0px, 24px",
    marginLeft: "24px"
}

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const list = useSelector((state) => state.list);
  const detail = list.find((detail) => detail.id === parseInt(param.id));

  return ( 
    <div style={{display: "block"}}>
        <div style={layoutStyle}>
            <div style={detailCardStyle}>
                <div style={cardHeaderStyle}>
                    <span>{`ID :${param.id}`}</span>
                    <button onClick={() => navigate(-1)} style={btnStyle}>이전으로</button>
                </div>
                <h1 style={h1Style}>{detail.title}</h1>
                <main style={mainStyle}>{detail.content}</main>
            </div>
        </div>
    </div>
  );
};

export default Detail;