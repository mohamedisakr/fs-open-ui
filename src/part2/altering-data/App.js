import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Note from './Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const baseURL = 'http://localhost:3001/notes'

  const hook = () => {
    console.log('effect')
    axios.get(baseURL).then((response) => {
      console.log('promise fulfilled')
      setNotes(response.data)
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

    axios.post(baseURL, noteToAdd).then((response) => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleShowNotes = () => {
    setShowAll(!showAll)
  }

  const toggleImportanceOf = (id) => {
    // console.log(`importance of ${id} needs to be toggled`)
    const url = `${baseURL}/${id}`
    const note = notes.find((note) => note.id === id)
    const noteToUpdate = {...note, important: !note.important}

    axios.put(url, noteToUpdate).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)))
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
