import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {incrementVote} from '../reducers/anecdoteReducer'
import AnecdoteCard from './AnecdoteCard'
import {updateVoteCount} from '../../../services/anecdotes-json-serv'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({filter, anecdotes}) => {
    if (filter === null) {
      return anecdotes
    }
    const regex = new RegExp(filter, 'i')
    return anecdotes.filter((anecdote) => anecdote.content.match(regex))
  })

  const handleIncrementVote = async (id) => {
    console.log(`vote button clicked, id : ${id}`)
    await updateVoteCount(id)
    dispatch(incrementVote(id))
  }

  return (
    <ul>
      {anecdotes.map((anecdot) => (
        <AnecdoteCard
          key={anecdot.id}
          anecdote={anecdot}
          // handleClick={() => dispatch(incrementVote(anecdot.id))}
          handleClick={() => handleIncrementVote(anecdot.id)}
        />
      ))}
    </ul>
  )
}

export default AnecdoteList
