import React, {useState} from 'react'
import {payload} from './names-data'

const App = () => {
  const [persons, setPersons] = useState(payload)
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const preventAddDuplicateName = (name) => {
    if (persons.some((person) => person.name === name)) {
      return true
    }
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAdd = {
      id: persons.length + 1,
      number: '93-32-6423122',
      name: newName,
    }

    const isExist = preventAddDuplicateName(personToAdd.name)
    if (isExist === true) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(personToAdd))
    setNewName('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Names</h2>
      <ul>
        {persons.map((person) => {
          const {id, name} = person
          return <li key={id}>{name}</li>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default App
