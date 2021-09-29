import React, {useState} from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (e) => {
    setGood(good + 1)
  }

  const handleNeutral = (e) => {
    setNeutral(neutral + 1)
  }

  const handleBad = (e) => {
    setBad(bad + 1)
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
      </div>
    </>
  )
}

export default App
