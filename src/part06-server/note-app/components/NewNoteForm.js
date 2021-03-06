import React from 'react'
import {useDispatch} from 'react-redux'
import {createNote} from '../reducers/noteReducer'
// import {createNew} from '../../../services/notes-json-serv'

const NewNoteForm = () => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    // const newNote = createNew(content)
    // dispatch(createNote(newNote))
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNoteForm
