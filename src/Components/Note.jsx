export default function Note({id,title,content,onDelete}) {
  return (
    <>
     <div className="note-div">
<h1>{title}</h1>
<p>{content}</p>
<button onClick={function(){
    return onDelete(id)
}}>Delete</button>
    </div>   
    </>
  );
}
