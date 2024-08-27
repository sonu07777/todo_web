// import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList/TodoList";
import AddTodo from "./component/AddTodo/AddTodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoFinished,addingTodo,onEdit,onDelete } from "./actions/todoAction";

// import todoContext from "./context/todo.context.js";
// import todoReducer from "./Reducer/todoReducer.js";
// import DispatchTodoContext from "./context/dispatchTodoContext.js";

function App() {
  // const [List,setList] = useState([
  //   { id: 0, todoData: "todo 1",finished:false },
  //   { id: 1, todoData: "todo 2",finished:false },
  // ]);
  // const [List, dispatch] = useReducer(todoReducer, []);
  const dispatch = useDispatch();
  const actions =bindActionCreators({addingTodo,todoFinished,onEdit,onDelete},dispatch)
  return (
    <>
      {/* // <todoContext.Provider value={{ List }}> */}
      {/* <DispatchTodoContext.Provider value={{ dispatch }}> */}
      <AddTodo addTodo={actions.addingTodo}
      /*updateList={(todo) => {
            dispatch({ type: "add_todo", payload: { todoText: todo } }); 
            console.log(List.map((t)=>t.finished));
            setList([...List,{id:List.length + 1,todoData:todo,finished:false}]);
            console.log(List.map((t)=>t.finished));
          }}*/
      />
      <TodoList todoFinished={actions.todoFinished} onEdit={actions.onEdit} onDeleteTodo ={actions.onDelete}  />
      {/* </DispatchTodoContext.Provider> */}
      {/* </todoContext.Provider> */}
    </>
  );
}

export default App;
