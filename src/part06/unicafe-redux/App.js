import React from 'react'
import {createStore} from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)

const App = () => {
  const incGood = () => {
    store.dispatch({
      type: 'GOOD',
    })
  }

  const incOK = () => {
    store.dispatch({
      type: 'OK',
    })
  }

  const incBad = () => {
    store.dispatch({
      type: 'BAD',
    })
  }

  const reset = () => {
    store.dispatch({
      type: 'ZERO',
    })
  }

  return (
    <>
      <div>
        <div>good {store.getState().good}</div>
        <div>neutral {store.getState().ok}</div>
        <div>bad {store.getState().bad}</div>
      </div>
      <div>
        <button onClick={incGood}>good</button>
        <button onClick={incOK}>neutral</button>
        <button onClick={incBad}>bad</button>
        <button onClick={reset}>reset stats</button>
      </div>
    </>
  )
}

export default App
