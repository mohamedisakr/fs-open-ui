import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './part06/unicafe-redux/App'
// import {createStore} from 'redux'
// import counterReducer from './part06/unicafe-redux/reducers/counterReducer'
// const store = createStore(counterReducer)

// const renderApp = () => {
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
// }

// renderApp()
// store.subscribe(renderApp)
