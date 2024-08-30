import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      // console.log(todo);
      let todoText = action.payload.todoText;
      todo.todoList.push({
        id: todo.todoList.length + 1,
        todoData: todoText,
        finished: false,
      });
    },
    editTodo: (state, action) => {
      let todo = action.payload.todo;
      let todoText = action.payload.todoText;

      // if (!todo || !todo.id) {
      //   console.error("Invalid todo object:", todo);
      //   return;
      // }

      state.todoList = state.todoList.map((t) => {
        console.log(t);

        if (t.id === todo.id) {
          t.todoData = todoText;
        }
        return t;
      });
    },
    onDeleteTodo: (state, action) => {
      let todo = action.payload.todo;
      state.todoList = state.todoList.filter((t) => t.id != todo.id);
    },
    todoFinished: (state, action) => {
      let todo = action.payload.todo;
      let isFinished = action.payload.isFinished;
      state.todoList = state.todoList.map((t) => {
        if (t.id == todo.id) {
          t.finished = isFinished;
        }
        // console.log(t);
        return t;
      });
    },
  },
});

export const { addTodo, editTodo, onDeleteTodo, todoFinished } = todoSlice.actions;
export default todoSlice.reducer;
