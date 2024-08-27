function todoReducer(state = [], action) {
  if (action.type == "add_todo") {
    let todoText = action.payload.todoText;
    return [
      ...state,
      { id: state.length + 1, todoData: todoText, finished: false },
    ];
  } else if (action.type == "edit_todo") {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const updateList = state.map((t) => {
      if (t.id == todo.id) {
        todo.todoData = todoText;
      }
      return t;
    });
    return updateList;
  } else if (action.type == "delete_todo") {
    let todo = action.payload.todo;
    const updateList = state.filter(
      (t) => t.id != todo.id
      /* {
          console.log(t.id);
          console.log("the todo id is", todo.id);
        }*/
    );
    return updateList;
  } else if (action.type == "finished_todo") {
    let todo = action.payload.todo;
    let isFinished = action.payload.isFinished;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        todo.finished = isFinished;
      }
      // console.log(t);
      return t;
    });
    return updatedList;
  }
  return state;
}

export default todoReducer;
