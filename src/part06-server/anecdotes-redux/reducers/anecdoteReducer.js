import {getAll, createNew} from '../../../services/anecdotes-json-serv'

const anecdoteReducer = (state = [], action) => {
  console.log(`state now: ${state}`)
  console.log(`action : ${action}`)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INCREMENT_VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote,
      )
    }
    default:
      return state
  }
}

/*
export const createAnecdote = (data) => {
  return {    type: 'NEW_ANECDOTE',    data,  }
}
*/

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const incrementVote = (id) => {
  return {
    type: 'INCREMENT_VOTE',
    data: {id},
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer
