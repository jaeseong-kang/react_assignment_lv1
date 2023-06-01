import { useEffect } from "react";
import Router from "./shared/Router";
import { useDispatch } from "react-redux";
import { __getTodo } from "./redux/modules/todoSlice";
import { __getList } from "./redux/modules/listSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
    dispatch(__getList());
  }, [dispatch]);

  return <Router />;
}

export default App;
