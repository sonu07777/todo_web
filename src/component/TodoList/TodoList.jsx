import { useContext } from "react";
import Todo from "../Todo/Todo";
import todoContext from "../../context/todo.context";
import dispatchTodoContext from "../../context/dispatchTodoContext";

function TodoList() {
  const { List, setList } = useContext(todoContext);
  const {dispatch} = useContext(dispatchTodoContext)
  function onFinished(todo,isFinished){
    dispatch({type:"finished_todo",payload:{todo:todo,isFinished:isFinished}}) 
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
  function onEdit(todo,todoText){
    
    dispatch({type:"edit_todo", payload:{todo:todo,todoText:todoText}})

    /*const updateList = List.map((t)=>{
      if(t.id == todo.id){
        todo.todoData = todoText;
      }
      return t;
    })
    setList(updateList)*/
  }
  function onDelete (todo){
    dispatch({type:"delete_todo",payload:{todo:todo}})
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
            changeFinished={(isFinished)=>{onFinished(todo,isFinished)}}
            onDelete={() => {
              onDelete(todo)
            }}
            onEdit = {
              (todoText)=>{
                onEdit(todo,todoText)
              }
            }
          />
        ))}
    </div>
  );
}
export default TodoList;
