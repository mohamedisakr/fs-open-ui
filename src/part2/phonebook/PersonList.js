import PersonCart from './PersonCart'

const PersonList = ({persons, handleDelete}) => {
  return persons.map((person) => {
    const {id, name, number} = person

    return (
      <ul key={id} style={{listStyle: 'none', padding: 0}}>
        <PersonCart
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={() => handleDelete(id)}
        />
      </ul>
    )
  })
}

export default PersonList
