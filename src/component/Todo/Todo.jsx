import { useState } from "react";

function Todo({ todoData, isFinished, id, changeFinished,onDelete ,onEdit}) {
  const [Finished, setFinished] = useState(isFinished);
  const [editing, setEditing]= useState(false)
  const [editText,setEditText] = useState("")
  return (
    <div>
      <input
        type="checkbox"
        checked={Finished}
        onChange={(e) => {setFinished(e.target.checked);
          changeFinished(e.target.checked)
        }}
      />
      {(editing)? <input type="text" value={editText} onChange={e=>setEditText(e.target.value)}/> : <span>{todoData}</span>}
      <button onClick={()=>{
        setEditing(!editing)
        onEdit(editText)
      }}>{(!editing)?"Edit":"save"}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
