import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleImportanceOf} from '../reducers/noteReducer'
// import {toggleImportance} from '../../../services/notes-json-serv'
import NoteCard from './NoteCard'

const NoteList = () => {
  const dispatch = useDispatch()

  const notes = useSelector(({filter, notes}) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  // const handleToggleImportance = async (id) => {
  //   await toggleImportance(id)
  //   dispatch(toggleImportanceOf(id))
  // }

  return (
    <ul>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
          // handleClick={() => {
          //   dispatch(handleToggleImportance(note.id))
          // }}
        />
      ))}
    </ul>
  )
}

export default NoteList
