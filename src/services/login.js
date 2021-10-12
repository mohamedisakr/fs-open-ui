import axios from 'axios'

const {REACT_APP_BASE_URL, REACT_APP_LOGIN_URL} = process.env
const baseUrl = `${REACT_APP_BASE_URL}${REACT_APP_LOGIN_URL}`
// const baseUrl = '/api/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export {login}
