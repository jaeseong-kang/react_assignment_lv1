import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export const __getList = createAsyncThunk(
  "list/__getList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/list");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getListDetail = createAsyncThunk(
  "list/__getListDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/list/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    appendList: (state, action) => {
      state.list.push(action.payload);
    },

    deleteList: (state, action) => {
      const targetId = action.payload;
      state.list.forEach((todo, index) => {
        if (todo.id === targetId) {
          state.list.splice(index, 1);
        }
      });
    },

    changeList: (state, action) => {
      state.list.forEach((todo, index) => {
        if (todo.id === action.payload.id) {
          state.list[index] = action.payload;
        }
      });
    },

    changeDone: (state, action) => {
      const targetId = action.payload;
      state.list.forEach((todo, index) => {
        if (todo.id === targetId) {
          state.list[index].isDone = !state.list[index].isDone;
        }
      });
    },
  },

  extraReducers: {
    [__getList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { appendList, changeDone, deleteList, changeList } = listSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default listSlice.reducer;
