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
  try {
    const config = {
      headers: {Authorization: token},
    }
    console.log(`token : ${token}`)
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const remove = async (id) => {
  try {
    console.log(`blog url : ${baseUrl}`)
    const config = {
      headers: {Authorization: token},
    }
    console.log(`token : ${token}`)
    const response = await axios.delete(`${baseUrl}/${id}`, config) //
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export {getAll, create, remove, setToken}
