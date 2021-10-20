import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleImportanceOf} from '../reducers/noteReducer'
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

  return (
    <ul>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  )
}

export default NoteList
