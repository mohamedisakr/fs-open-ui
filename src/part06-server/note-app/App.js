import React, {useEffect} from 'react'
import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import VisibilityFilter from './components/VisibilityFilter'
// import {getAll} from '../../services/notes-json-serv'
import {initializeNotes} from './reducers/noteReducer'
import {useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   getAll().then((notes) => dispatch(initializeNotes(notes)))
  // })

  useEffect(() => initializeNotes(dispatch))

  return (
    <div>
      <NewNoteForm />
      <VisibilityFilter />
      <NoteList />
    </div>
  )
}

export default App
