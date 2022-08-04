import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  //8.등록
  todos: todos,
  counter: counter,
});
const store = createStore(rootReducer);

export default store;

//1. configStore.js 만들고
