import { combineReducers } from "redux";
import todos from "./todos";
import todosLists from "./todoslists";

const rootReducer = combineReducers({
  todos,
  todosLists
});

export default rootReducer;
