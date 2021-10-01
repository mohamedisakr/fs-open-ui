import React, {useState, useEffect} from 'react'
import {getAll, create, update} from '../../services/notes'
import Note from './Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    getAll().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }

  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteToAdd = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }

    create(noteToAdd).then((returnedNote) => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleShowNotes = () => {
    setShowAll(!showAll)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id)
    const noteToUpdate = {...note, important: !note.important}

    update(id, noteToUpdate).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
    })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

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
          let {id, content, important} = note
          return (
            <Note
              key={id}
              content={content}
              toggleImportance={() => toggleImportanceOf(id)}
              important={important}
            />
          )
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
