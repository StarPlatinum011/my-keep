import React from "react";
import CreateArea from "./CreateArea";

function Note(props) {



  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> {
        props.toRemove(props.id)
      }}>DELETE</button>
    </div>
  );
}

export default Note;