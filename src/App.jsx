import { useState } from "react";
import "./App.css";

import {TitleInputBox, ContentInputBox, RegisterButton, DoneListBox, WorkListBox} from "./components"
import { TodoContext } from "./context/TodoContext";

function App() {
  const [todo, setTodo] = useState({
    id: 1,
    title: "",
    content: "",
    isDone: false,
  });
  const [list, setList] = useState([
    {id:0,title:"과제하기",content:"Todo 리스트를 만들어 봅시다.",isDone: false},
    {id:1,title:"공부하기",content:"Todo 리스트를 만들기 위해 공부해 봅시다.",isDone:true}
  ]);

  return (
    <div className="Layout">

      <div className="headline">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      
      <TodoContext.Provider value={{todo,setTodo,list,setList}}>

        <div className="form">
          <div className="inputBlock">
            <span className="titleInput">
              제목 <TitleInputBox />
            </span>
            <span className="contentInput">
              내용 <ContentInputBox />
            </span>
          </div>
            <RegisterButton />
        </div>

        <div className="workingList">
            <p>Working...🔥</p>
            <WorkListBox />
        </div>

        <div className="doneList">
            <p>Done...!🎉</p>
            <DoneListBox />
        </div>

      </TodoContext.Provider>
    </div>
  );
}

export default App;
