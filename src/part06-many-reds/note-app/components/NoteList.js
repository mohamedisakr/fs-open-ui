import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleImportanceOf} from '../reducers/noteReducer'
import NoteCard from './NoteCard'

const NoteList = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state)

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
