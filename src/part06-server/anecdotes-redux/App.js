import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/VisibilityFilter'
import {getAll} from '../../services/anecdotes-json-serv'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import {useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getAll().then((notes) => dispatch(initializeAnecdotes(notes)))
  }, [dispatch])

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
