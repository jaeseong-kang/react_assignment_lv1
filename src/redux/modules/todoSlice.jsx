import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 2,
  title: "",
  content: "",
  isDone: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },

    changeContent: (state, action) => {
        state.content = action.payload;
    },

    changeIsDone: (state, action) => {
        state.isDone = action.payload;
    },

    plusOneId: (state, action) => {
        state.id = state.id + 1;
    }
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { changeTitle, changeContent, changeIsDone, plusOneId } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;