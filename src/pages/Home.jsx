import "../App.css";
import {
  TitleInputBox,
  ContentInputBox,
  RegisterButton,
  DoneListBox,
  WorkListBox,
} from "../components";

const Home = () => {
  return (
    <div className="Layout">

      <div className="headline">
        <span>My Todo List</span>
        <span>React</span>
      </div>

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
    </div>
  );
};

export default Home;
