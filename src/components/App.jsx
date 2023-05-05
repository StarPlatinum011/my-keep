import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
      //create constant to store the note contents
  const [notes, setNotes] = useState([]);

  function addNotes(notes) {
    console.log(notes);
    setNotes((prevNotes)=>{
        return[
            ...prevNotes, notes
        ]
    })
  }

  function onDelete(id) {
    setNotes(prevItem =>{
      return prevItem.filter((item, index)=> {
        return index !== id;
      })
    })
  }
    return (
    <div>
        <Header />
        <CreateArea onAdd={addNotes}/>
        {notes.map((note, index)=>(
            <Note key={index} 
            id={index} 
            title={note.title} 
            content={note.content} 
            toRemove={onDelete}
            />
        ))}

        
        <Footer />
    </div>
    );
}

export default App;
