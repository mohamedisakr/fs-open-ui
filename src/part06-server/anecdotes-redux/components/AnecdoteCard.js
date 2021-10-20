const NoteCard = ({anecdote, handleClick}) => {
  return (
    <li key={anecdote.id}>
      {anecdote.content}
      <strong> has {anecdote.votes} </strong>
      <button onClick={handleClick}>vote</button>
    </li>
  )
}

export default NoteCard
