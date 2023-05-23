import ButtonBox from "./ButtonBox";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const DoneListBox = () => {

    const condition = true; 
    const data = useContext(TodoContext);
    const doneList = data.list.filter((obj) => obj.isDone === condition);
  
    return (
      <div>
        {doneList.map((obj) => {
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
  
  export default DoneListBox;