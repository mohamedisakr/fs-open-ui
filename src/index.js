import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
import App from './part06/unicafe-redux/App'
// import counterReducer from './part06/unicafe-redux/reducers/counterReducer'

// const store = createStore(counterReducer)

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
)
