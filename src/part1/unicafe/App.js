import React, {useState} from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const positive = (good / total) * 100
  // good: 1, neutral: 0, bad: -1
  const average = (good * 1 + neutral * 0 + bad * -1) / total

  const handleGood = (e) => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = (e) => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = (e) => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <>
      <div>
        <h3>give feedback</h3>
        <button id="goodButton" onClick={handleGood}>
          good
        </button>
        <button id="neutralButton" onClick={handleNeutral}>
          neutral
        </button>
        <button id="badButton" onClick={handleBad}>
          bad
        </button>
      </div>
      <div>
        <h3>statistics</h3>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {total}</p>
        <p>average: {average}</p>
        <p>positive: {positive} %</p>
      </div>
    </>
  )
}

export default App
