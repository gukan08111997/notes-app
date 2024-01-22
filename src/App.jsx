import { useState } from "react";
import "../styles.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";

function App() {
  const [note,setNote] = useState({
    title:"",
    content:""
  });
  const [notes,setNotes] = useState([]);
  function handleChange(event){
    const {name,value} = event.target;
    setNote(prev=>{
      return{
        ...prev,[name]:value
      }
    })
  }
  function addItem (event){
    event.preventDefault();
    setNotes(prev=>{
      return[...prev,note]
    })
    setNote({
      title:"",
      content:""
    })
  }
  function deleteItem(id){
    setNotes(prev=>{
      return prev.filter(function(element,index){
        return index !== id;
      })
    })
  }
  return <>
 <Header />
 <section className="body">
<CreateArea value={note} onChanged={handleChange} onAdd = {addItem}/>
<div className="note-container">
{notes.map(function(element,index){
  return(
<Note key={index} id={index} title={element.title} content={element.content} onDelete={deleteItem}/>
  )
})}
</div>


 </section>
 </>;
}

export default App;
