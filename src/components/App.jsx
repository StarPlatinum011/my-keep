import React from "react";
import Footer from "./Footer"
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
    return ( 
    <div>
        <Header />
        {
            notes.map(noteContent => 
                <Note 
                    key= {noteContent.key}
                    title={noteContent.title}
                    content = {noteContent.content}
                />
            )
        }
        <Footer />
    </div>
    );
}

export default App;
