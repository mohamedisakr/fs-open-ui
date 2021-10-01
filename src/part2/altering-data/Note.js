const Note = ({id, content, important, toggleImportance}) => {
  const label = important ? 'make no important' : 'make important'
  return (
    <li key={id}>
      {content} <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
export default Note
