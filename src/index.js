import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './part06/anecdotes-redux/App'
import anecdoteReducer from './part06/anecdotes-redux/reducers/anecdoteReducer'

const store = createStore(anecdoteReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
