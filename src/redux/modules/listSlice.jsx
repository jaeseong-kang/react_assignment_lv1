import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0,title:"과제하기xp",content:"Todo 리스트를 만들어 봅시다.",isDone: false},
    {id:1,title:"공부하기",content:"Todo 리스트를 만들기 위해 공부해 봅시다.",isDone:true}
];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    appendList: (state, action) => {
      state = [...state, action.payload];
    },

    changeList: (state, action) => {
        state = [action.payload];
    }
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { appendList, changeList } = listSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default listSlice.reducer;