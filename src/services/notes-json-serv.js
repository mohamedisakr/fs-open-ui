import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createNew = async (content) => {
  const object = {content, important: false}
  const response = await axios.post(baseUrl, object)
  return response.data
}

export const toggleImportance = async (id) => {
  // get note by id
  const {data} = await axios.get(`${baseUrl}/${id}`)

  // update its importance
  const updatedNote = {...data, important: !data.important}
  const response = await axios.post(baseUrl, updatedNote)
  return response.data
}
