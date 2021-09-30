import PersonCart from './PersonCart'

const PersonList = ({persons}) => {
  return persons.map((person) => {
    const {id, name, number} = person

    return <PersonCart id={id} name={name} number={number} />
  })
}

export default PersonList
