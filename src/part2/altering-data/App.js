import React, {useState, useEffect} from 'react'
import {getAll, create, update} from '../../services/notes'
import Note from './Note'
import Notification from '../../utils/Notification'
import Footer from './Footer'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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

    update(id, noteToUpdate)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`,
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter((n) => n.id !== id))
      })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  return (
    <div>
      <h2>Notes</h2>
      <Notification message={errorMessage} />
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({target}) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({target}) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      <div>
        <button onClick={() => handleShowNotes()}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul className="note-list">
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
      <Footer />
    </div>
  )
}

export default App
