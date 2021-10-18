import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
  }

  return (
    <div>
      <h2>create new</h2>
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      {/* {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default App
