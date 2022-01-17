import axios from 'axios'

const {REACT_APP_BASE_URL, REACT_APP_CUSTOMER_URL} = process.env
const baseUrl = `${REACT_APP_BASE_URL}${REACT_APP_CUSTOMER_URL}`

const getAll = async () => {
  console.log(`base url ${baseUrl}`)
  const res = await axios.get(baseUrl)
  return res
}

const getCustomers = async (currentPage, limit) => {
  const res = await axios.get(`${baseUrl}?page=${currentPage}&limit=${limit}`)
  return res
}

export {getAll, getCustomers}
