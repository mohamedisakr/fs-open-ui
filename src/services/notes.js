import axios from 'axios'
const {REACT_APP_BASE_URL, REACT_APP_NOTE_URL} = process.env
const baseUrl = `${REACT_APP_BASE_URL}${REACT_APP_NOTE_URL}`
// 'http://localhost:3001/api/notes'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: {Authorization: token},
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

export {getAll, create, update, setToken}
