import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import anecdoteReducer from './anecdoteReducer'

// const reducer = combineReducers(anecdoteReducer)
// const store = createStore(reducer, composeWithDevTools())
const store = createStore(anecdoteReducer, composeWithDevTools())
console.log(store.getState())

export default store
