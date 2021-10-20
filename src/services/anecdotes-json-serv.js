import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createNew = async (content) => {
  const object = {content, votes: 0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

/*
export const toggleImportance = async (id) => {
  // get note by id
  const {data} = await axios.get(`${baseUrl}/${id}`)

  // update its importance
  const updatedNote = {...data, important: !data.important}
  const response = await axios.post(baseUrl, updatedNote)
  return response.data
}
*/
export const updateVoteCount = async (id) => {
  console.log(`anecdote id from server : ${id}`)

  // get note by id
  const {data} = await axios.get(`${baseUrl}/${id}`)
  console.log(`result from server : ${data}`)

  // update its vote count
  const updatedAnecdote = {...data, votes: data.votes + 1}
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return response.data
}
