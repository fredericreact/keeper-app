import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote (noteItem) {
return(
<Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
        />
);
}


function App () {
    console.log(notes[1].title);
    return(
        <div>
        <Header/>
        {notes.map(createNote)}
        <Footer/>
        </div>
    );
    
}

export default App;




// key: 3,
//       title: "Arrays",
//       content:
//         "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
//     },