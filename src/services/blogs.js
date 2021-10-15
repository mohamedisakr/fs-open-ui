import axios from 'axios'
const {REACT_APP_BASE_URL, REACT_APP_BLOG_URL} = process.env
const baseUrl = `${REACT_APP_BASE_URL}${REACT_APP_BLOG_URL}`
// '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const config = {
    headers: {Authorization: token},
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: {Authorization: token},
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}
export {getAll, create, remove, setToken}
