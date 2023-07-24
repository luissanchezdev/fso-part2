import React, { useState } from 'react'
import Note from './Note'

const App = ({ originalNotes }) => {
  const [notes, setNotes] = useState( originalNotes )
  const [newNote, setNewNote] = useState('add new note')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const newObjNote = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    setNotes([...notes, newObjNote])
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter( note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <h3>Add notes</h3>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}></input>
          <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App 