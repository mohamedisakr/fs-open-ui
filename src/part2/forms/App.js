import React, {useState} from 'react'
import Note from './Note'

const App = ({notes}) => {
  const [allNotes, setAllNotes] = useState(notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    setAllNotes(allNotes.concat(noteToAdd))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleShowNotes = () => {
    setShowAll(!showAll)
  }

  const notesToShow = showAll
    ? allNotes
    : allNotes.filter((note) => note.important === true)

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <button onClick={() => handleShowNotes()}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => {
          let {id, content} = note
          return <Note key={id} content={content} />
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
