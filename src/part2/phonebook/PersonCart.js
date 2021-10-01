const PersonCart = ({id, name, number, handleDelete}) => {
  return (
    <li key={id}>
      {name} {number} <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  )
}

export default PersonCart
