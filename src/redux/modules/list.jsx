// reduxcounter1
// redux/modules/counter.js

// 초기 상태값
const initialState = [
  {id:0,title:"과제하기",content:"Todo 리스트를 만들어 봅시다.",isDone: false},
  {id:1,title:"공부하기",content:"Todo 리스트를 만들기 위해 공부해 봅시다.",isDone:true}
]

const APPEND_LIST = "APPEND_LIST";
const CHANGE_LIST = "CHANGE_LIST";



// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const appendList = (payload) => {
  return {
    type: APPEND_LIST,
    payload,
  };
};

export const changeList = (payload) => {
  return {
    type: CHANGE_LIST,
    payload,
  };
};

// 리듀서
const list = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {

    case APPEND_LIST:
      return [...state,action.payload]

    case CHANGE_LIST:
      return action.payload;

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default list;
