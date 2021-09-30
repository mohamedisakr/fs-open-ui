const PersonList = ({persons}) => {
  return persons.map((person) => {
    const {id, name, number} = person
    return (
      <li key={id}>
        {name} {number}
      </li>
    )
  })
}

export default PersonList
