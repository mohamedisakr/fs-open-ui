import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {incrementVote} from '../reducers/anecdoteReducer'
import AnecdoteCard from './AnecdoteCard'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state)

  return (
    <ul>
      {anecdotes.map((anecdot) => (
        <AnecdoteCard
          key={anecdot.id}
          anecdote={anecdot}
          handleClick={() => dispatch(incrementVote(anecdot.id))}
        />
      ))}
    </ul>
  )
}

export default AnecdoteList
