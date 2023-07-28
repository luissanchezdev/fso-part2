const Note = ({ note, toggleImportanceOf }) => {

  return (
    <>
      <li>{note.content}</li>
      <button onClick={toggleImportanceOf}>{note.important ? 'change to not important' : 'change to important'}</button>
    </>
  )
}

export default Note