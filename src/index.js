import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
// import App from './part06-server/anecdotes-redux/App'
import App from './App'
import store from './part06-server/anecdotes-redux/reducers/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
