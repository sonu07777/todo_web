// import { useContext } from "react";
import Todo from "../Todo/Todo";
// import todoContext from "../../context/todo.context";
// import dispatchTodoContext from "../../context/dispatchTodoContext";
import { useDispatch, useSelector } from "react-redux";
// import { onDelete } from "../../actions/todoAction";

function TodoList({todoFinished,editTodo,onDeleteTodo}) {
  // console.log(List);
  
  // const { List, setList } = useContext(todoContext);
  const List = useSelector((state) =>state.todo.todoList); //the todo which is present in the state.todo is got from the combinedReducer
  // const { dispatch } = useContext(dispatchTodoContext);
  console.log(List);
  
  const dispatch = useDispatch();
  function onFinished(todo, isFinished) {
    // dispatch({
    //   type: "finished_todo",
    //   payload: { todo: todo, isFinished: isFinished },
    // });
    todoFinished({todo:todo,isFinished:isFinished})
    // console.log(isFinished);
    // const updatedList = List.map((t) => {
    //   if (t.id == todo.id) {
    //     todo.finished = hay;
    //   }
    //   console.log(t);
    //   return t;
    // });
    // setList(updatedList);
  }
  function onEdit(todo, todoText) {
    // dispatch({
    //   type: "edit_todo",
    //   payload: { todo: todo, todoText: todoText },
    // });
    console.log('Editing todo:', todo);
    editTodo({todo:todo,todoText:todoText})
    /*const updateList = List.map((t)=>{
      if(t.id == todo.id){
        todo.todoData = todoText;
      }
      return t;
    })
    setList(updateList)*/
  }
  function onDelete(todo) {
    // dispatch({ type: "delete_todo", payload: { todo: todo } });
    onDeleteTodo({todo:todo})
    // const updateList = List.filter(
    //   (t) => t.id != todo.id
    //   // {
    //   //   console.log(t.id);
    //   //   console.log("the todo id is", todo.id);
    //   // }
    // );
    // setList(updateList);
  }
  return (
    <div>
      {List.length > 0 &&
        List.map((todo) => (
          <Todo
          todoData={todo.todoData}
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            changeFinished={(isFinished) => {
              onFinished(todo, isFinished);
            }}
            onDelete={() => {
              onDelete(todo);
            }}
            onEdit={(todoText) => {
              onEdit(todo,todoText);
            }}
          />
        ))}
    </div>
  );
}
export default TodoList;
