import { combineReducers, createStore } from "redux";

// Reducer import 
import todoReducer from "./Reducer/todoReducer";

const Reducer = combineReducers({todo:todoReducer})

const store = createStore(Reducer);


export default store;