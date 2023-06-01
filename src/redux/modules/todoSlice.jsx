import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: null,
  isLoading: false,
  error: null,
};

export const __getTodo = createAsyncThunk(
  "todo/__getTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todo");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      console.log(state);
      state.todo.title = action.payload;
    },

    changeContent: (state, action) => {
      state.todo.content = action.payload;
    },

    changeIsDone: (state, action) => {
      state.todo.isDone = action.payload;
    },

    plusOneId: (state) => {
        state.todo.id = state.todo.id + 1;
    }
  },

  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { changeTitle, changeContent, changeIsDone, plusOneId } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;