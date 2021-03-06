import React, {useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const min = 0
  const max = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(max).fill(0))
  const [mostVotes, setMostVotes] = useState(0)
  const [mostIndex, setMostIndex] = useState(0)

  const getMostVotes = () => {
    let mostVotes = votes[0]
    let mostIndex = 0
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > mostVotes) {
        mostVotes = votes[i]
        mostIndex = i
      }
    }
    return [mostVotes, mostIndex]
  }

  const generateRandom = (min, max) => {
    let newMin = Math.ceil(min)
    let newMax = Math.floor(max)
    return parseInt(Math.floor(Math.random() * (newMax - newMin + 1)) + newMin)
  }

  const handleSelect = (e) => {
    setSelected(generateRandom(min, max - 1))
  }

  const handleVote = (e) => {
    const copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)
    const [mostVotes, mostIndex] = getMostVotes()
    setMostVotes(mostVotes)
    setMostIndex(mostIndex)
  }
  return (
    <>
      <div>
        <h3>Anecdote of the day</h3>
        <p>{anecdotes[selected]}</p>
        {votes[selected] > 0 ? (
          <p>has {votes[selected]} votes</p>
        ) : (
          <p>has no votes</p>
        )}
        <button id="selectButton" onClick={handleSelect}>
          next anecdote
        </button>
        <button id="voteButton" onClick={handleVote}>
          vote
        </button>
      </div>
      <div>
        <h3>Anecdote with most votes</h3>
        {mostVotes > 0 ? (
          <div>
            <p>{anecdotes[mostIndex]}</p>
            <p>has {votes[mostIndex]} votes</p>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default App
