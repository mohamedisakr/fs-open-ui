import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import blogReducer from './blogReducer'
import filterReducer from './filterReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools())
console.log(store.getState())

export default store
