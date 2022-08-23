import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

const [note, setNote] = useState({
title:"",
content:""

}); 



function  handleChange (event){
    const {name,value} = event.target
    setNote({
        ...note,
        [name]:value});
   
}

function submitNote(event){
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title:"",
      content:""
      
      });
    
}


  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        <input onChange={handleChange} value ={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value ={note.content}  name="content" placeholder="Take a note..." rows="3" />
       <Zoom in={true}>
        <Fab type="submit"><AddIcon/></Fab>
</Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
