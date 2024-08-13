import { useContext, useState } from "react";
import dispatchTodoContext from "../../context/dispatchTodoContext";

function AddTodo(/*{ updateList }*/) {
  const [inputText, setInputText] = useState("");
  const {dispatch} = useContext(dispatchTodoContext);
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="enter the todo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          // updateList(inputText);
          dispatch({type:"add_todo" ,payload:{todoText:inputText}})
          setInputText("");
        }}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
