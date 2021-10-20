import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import noteReducer from './noteReducer'
import filterReducer from './filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools())
console.log(store.getState())

export default store
