import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import App from './part06-many-reds/note-app/App'
import noteReducer from './part06-many-reds/note-app/reducers/noteReducer'
import filterReducer from './part06-many-reds/note-app/reducers/filterReducer'

const reducer = combineReducers({notes: noteReducer, filter: filterReducer})
const store = createStore(reducer, composeWithDevTools())
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
