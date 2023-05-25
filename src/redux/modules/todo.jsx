// reduxcounter1
// redux/modules/counter.js

// 초기 상태값
const initialState = {
  id: 2,
  title: "",
  content: "",
  isDone: false,
};

const TITLE_CHANGE = "TITLE_CHANGE";
const COTENT_CHANGE = "CONTENT_CHANGE";
const ISDONE_CHANGE = "ISDONE_CHANGE";
const PLUSONE_ID = "PLUSONE_ID";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const changeTitle = (payload) => {
  return {
    type: TITLE_CHANGE,
    payload,
  };
};

export const changeContent = (payload) => {
  return {
    type: COTENT_CHANGE,
    payload,
  };
};

export const changeIsDone = (payload) => {
  return {
    type: ISDONE_CHANGE,
    payload,
  };
};

export const plusOneId = () => {
  return {
    type: PLUSONE_ID,
  };
};

// 리듀서
const todo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TITLE_CHANGE:
      return { ...state, title: action.payload };

    case COTENT_CHANGE:
      return { ...state, content: action.payload };

    case ISDONE_CHANGE:
      return { ...state, isDone: action.payload };
    case PLUSONE_ID:
      return { ...state, id: state.id + 1 };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
