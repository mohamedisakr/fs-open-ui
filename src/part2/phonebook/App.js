import React, {useState} from 'react'
import {payload} from './names-data'

const App = () => {
  const [persons, setPersons] = useState(payload)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNUmber] = useState('')

  const resetState = () => {
    setNewName('')
    setNewNUmber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNUmber(event.target.value)
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
      number: newNumber,
      name: newName,
    }

    const isExist = preventAddDuplicateName(personToAdd.name)
    if (isExist === true) {
      alert(`${newName} is already added to phonebook`)
      resetState()
      return
    }

    setPersons(persons.concat(personToAdd))
    resetState()
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Names</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {persons.map((person) => {
          const {id, name, number} = person
          return (
            <li key={id}>
              {name} {number}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
