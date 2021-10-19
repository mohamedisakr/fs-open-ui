import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  return (
    <div>
      <h2>Search for anecdote</h2>
      <VisibilityFilter />
      <h2>create new</h2>
      <AnecdoteForm />
      <h2>Anecdotes</h2>
      <AnecdoteList />
    </div>
  )
}

export default App
