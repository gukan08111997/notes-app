export default function CreateArea({value,onChanged,onAdd}) {
  return <>
  <div className="container-CreateArea">
    <label htmlFor="title">Title Name:</label>
    <input name="title" type="text" placeholder="Title" onChange={onChanged} value={value.title} />
    <label htmlFor="notes">Your Notes:</label>
    <textarea name="content" placeholder="Content" onChange={onChanged} value={value.content}></textarea>
    <button onClick={onAdd}>ADD</button>
  </div>
  </>;
}
