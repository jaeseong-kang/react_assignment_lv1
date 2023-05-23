const DoneListBox = ({ list, condition }) => {
    let doneList = list.filter((obj) => obj.isDone === condition);
  
    return (
      <div>
        {workingList.map((obj) => {
          return (
            <div>
              <h2>{obj.title}</h2>
              <p>{obj.content}</p>
              <button>삭제</button>
              <button>취소</button>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default DoneListBox;