import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";


function App () {



const [newItem, setNewItem] =useState([]);

function addNote(note){

setNewItem([...newItem,note])
}


function supprimeNote(id){
setNewItem(newItem.filter((item,index) =>{
    return index !==id;
}))
        


    
    }

    return(
        <div>
        <Header/>
        <CreateArea 
            addNote={addNote}
        />
        {newItem.map((noteItem,index) => 
        <Note
        
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        supprimeNote={supprimeNote}
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