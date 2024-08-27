// import { bindActionCreators } from "redux";
import { TODO_FINISHED,ADD_TODO,ON_DELETE,ON_EDIT } from "../constants/constants";
export const todoFinished = (todo,isFinished) => ({
  type: TODO_FINISHED,
  payload: { todo: todo, isFinished: isFinished },
}); 
export const addingTodo = (inputText) => ({
  type: ADD_TODO,
  payload: { todoText: inputText }
});
export const onEdit = (todo,todoText) => ({
  type: ON_EDIT,
  payload: { todo: todo, todoText: todoText },
});
export const onDelete = (todo) => ({
  type: ON_DELETE,
  payload: { todo: todo },
});

// export const action = bindActionCreators({todoFinished,addTodo,onEdit,onDelete}, dispatch);
