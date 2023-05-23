import { useState } from "react";
import TitleInputBox from "./components/TitleInputBox";
import ContentInputBox from "./components/ContentInputBox";
import "./App.css";
import RegisterButton from "./components/RegisterButton";
import WorkListBox from "./components/WorkListBox";
import DoneListBox from "./components/DoneListBox";

function App() {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    content: "",
    isDone: false,
  });
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <div className="headline">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="inputBlock">
        <span className="titleInput">
          제목 <TitleInputBox todo={todo} setTodo={setTodo} />
        </span>
        <span className="contentInput">
          내용 <ContentInputBox todo={todo} setTodo={setTodo} />
        </span>
        <RegisterButton list={list} setList={setList} todo={todo} />
      </div>
      <div className="workingList">
        <p>Working...</p>
        <WorkListBox list={list} condition={false} />
      </div>
      <div className="doneList">
        <p>Done...!</p>
        <DoneListBox list={list} condition={true} />
      </div>
    </div>
  );
}

export default App;
