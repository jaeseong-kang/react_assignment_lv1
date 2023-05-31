import { configureStore } from "@reduxjs/toolkit";

import todo from "../modules/todoSlice";
import list from "../modules/listSlice";





const store = configureStore({
  reducer: { todo, list },
});

export default store;