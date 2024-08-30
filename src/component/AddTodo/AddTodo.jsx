import { useState } from "react";
import { useDispatch } from "react-redux";
// import dispatchTodoContext from "../../context/dispatch3";
import { addingTodo } from "../../actions/todoAction.js";

function AddTodo(/*{ updateList }*/ {addTodo}) {
  const [inputText, setInputText] = useState("");
  // const {dispatch} = useContext(dispatchTodoContext);
  const dispatch = useDispatch();
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
          addTodo({todoText:inputText})
          setInputText("");
        }}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
