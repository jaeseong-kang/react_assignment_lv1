import ButtonBox from "./ButtonBox";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const WorkListBox = () => {
  
  const condition = false;
  const data = useContext(TodoContext);
  const workingList = data.list.filter((obj) => obj.isDone === condition);

  return (
    <div>
      {workingList.map((obj) => {
        return (
          <div>
            <h2>{obj.title}</h2>
            <p>{obj.content}</p>
            <ButtonBox ids={obj.id} condition={condition} />
          </div>
        );
      })}
    </div>
  );
};

export default WorkListBox;
