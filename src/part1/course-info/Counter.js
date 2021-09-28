import React, {useState} from 'react'
import Button from './Button'
import Display from './Display'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = (e) => {
    setCounter(counter + 1)
  }

  const decrement = (e) => {
    setCounter(counter - 1)
  }

  const reset = (e) => {
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button text="Plus" id="incrementButton" onClick={increment} />
      <Button text="Minus" id="decrementButton" onClick={decrement} />
      <Button text="Reset" id="resetButton" onClick={reset} />
    </div>
  )
}

export default Counter
