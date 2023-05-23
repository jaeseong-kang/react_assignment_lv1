import { useState } from "react";
import "./App.css";

import {TitleInputBox, ContentInputBox, RegisterButton, DoneListBox, WorkListBox} from "./components"
import { TodoContext } from "./context/TodoContext";

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
      
      <TodoContext.Provider value={{todo,setTodo,list,setList}}>

        <div className="inputBlock">
          <span className="titleInput">
            제목 <TitleInputBox />
          </span>
          <span className="contentInput">
            내용 <ContentInputBox />
          </span>
            <RegisterButton />
        </div>

        <div className="workingList">
            <p>Working...</p>
            <WorkListBox />
        </div>

        <div className="doneList">
            <p>Done...!</p>
            <DoneListBox />
        </div>

      </TodoContext.Provider>
    </div>
  );
}

export default App;
