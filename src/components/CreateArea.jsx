import React, {useState} from "react";

function CreateArea(props) {

const [inputText, setInputText] = useState({
title:"",
content:""

}); 



function inputChange (e){
    const {name,value} = e.target
   if (name==="title") {
    setInputText({
        ...inputText,
        title:value});
   }else {
    setInputText({
        ...inputText,
        content:value});
   }
   
}

function submitNote(event){
    event.preventDefault();
    props.addNote(inputText);
    setInputText({
      title:"",
      content:""
      
      });
    
}


  return (
    <div>
      <form onSubmit={submitNote}>
        <input onChange={inputChange} value ={inputText.title} name="title" placeholder="Title" />
        <textarea onChange={inputChange} value ={inputText.content}  name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
