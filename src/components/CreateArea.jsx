import React, { useState } from "react";

function CreateArea(prop) {
  const [notes, setNote] = useState({
    title: "",
    content:""
  });

  function handleChangeNote(evt){
    const newNote = evt.target.value;
    const name = evt.target.name;
    setNote((prevVal)=>{
      return{
        ...prevVal,
        [name]: newNote
      }
    });
  }

  function addNote(evt) {
    prop.onAdd(notes);
    setNote({title:"", content:""})
    evt.preventDefault();
  }

  return (
    <div>
      <form>
        <input value={notes.title} onChange={handleChangeNote} name="title" placeholder="Title" />
        <textarea value={notes.content} name="content" onChange={handleChangeNote} placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
