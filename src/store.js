import { combineReducers, createStore } from "redux";

// Reducer import 
// import todoReducer from "./Reducer/todoReducer";
import todoReducer from "./Slice/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

// const Reducer = combineReducers({todo:todoReducer})

// const store = createStore(Reducer);  

// when we user the redux toolkit at that time we don't use the createStore for the store the reducer instead we use the configStore i.e

const store = configureStore({
    reducer:{
        todo:todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;