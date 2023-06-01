import ButtonBox from "./ButtonBox";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WorkListBox = () => {
  const condition = false;
  const list = useSelector((state) => state.list.list);
  const workingList = list.filter((obj) => obj.isDone === condition);

  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  };

  const cardStyle = {
    padding: "10px 20px 10px 20px",
    border: "4px solid #008080",
    borderRadius: "10px",
    width: "270px",
    height: "170px",
    display:"flex",
    flexDirection: "column",
    gap: "5px"
  };

  const h2Style = {
    margin: "10px 0px",
  };

  const pStyle = {
    fontSize: "16px",
    margin: "8px 0px",
  };

  return (
    <div style={listStyle}>
      {workingList.map((obj) => {
        return (
          <div key={obj.id} style={cardStyle}>
            <Link to={`/detail/${obj.id}`}>
              <span style={{cursor: "pointer"}}>상세보기</span>
            </Link>
            <h2 style={h2Style}>{obj.title}</h2>
            <p style={pStyle}>{obj.content}</p>
            <ButtonBox ids={obj.id} condition={condition} />
          </div>
        );
      })}
    </div>
  );
};

export default WorkListBox;
