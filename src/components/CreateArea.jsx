import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

const [note, setNote] = useState({
title:"",
content:""

}); 

const [isExpanded, setExpanded] = useState(false);

function  expand (){
setExpanded(true);
 
}

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
        {isExpanded && (<input onChange={handleChange} value ={note.title} name="title" placeholder="Title" /> )}
        <textarea onClick={expand} onChange={handleChange} value ={note.content}  name="content" placeholder="Take a note..." rows={isExpanded ? 3 :1} />
        <Zoom in={isExpanded}>
       <Fab type="submit"><AddIcon/></Fab> 
</Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
