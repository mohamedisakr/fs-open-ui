import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './index.css'
import App from './part2/server-data/App'

axios.get('http://localhost:3001/notes').then((response) => {
  const notes = response.data
  ReactDOM.render(<App notes={notes} />, document.getElementById('root'))
})

// const fetchNotes = async () => {
//   const response = await axios.get('http://localhost:3001/notes')
//   const notes = response.data
//   return notes
// }

// const notes = fetchNotes()

// ReactDOM.render(
//   <React.StrictMode>
//     <App notes={notes} />
//   </React.StrictMode>,
//   document.getElementById('root'),
// )
