import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";


function App () {



const [notes, setNotes] =useState([]);

function addNote(newNote){

setNotes([...notes,newNote])
}


function deleteNote(id){
setNotes(notes.filter((item,index) =>{
    return index !==id;
}))
        


    
    }

    return(
        <div>
        <Header/>
        <CreateArea 
            onAdd={addNote}
        />
        {notes.map((noteItem,index) => 
        <Note
        
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />



)}
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