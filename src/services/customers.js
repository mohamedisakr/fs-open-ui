import axios from 'axios'

const {REACT_APP_BASE_URL, REACT_APP_CUSTOMER_URL} = process.env
const baseUrl = `${REACT_APP_BASE_URL}${REACT_APP_CUSTOMER_URL}`

const getAll = async () => {
  console.log(`base url ${baseUrl}`)
  const res = await axios.get(baseUrl)
  return res
}
export {getAll}
