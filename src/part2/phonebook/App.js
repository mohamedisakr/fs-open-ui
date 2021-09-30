import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PersonForm from './PersonForm'
import PersonList from './PersonList'
import SearchBox from './SearchBox'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNUmber] = useState('')
  const [keyword, setKeyword] = useState('')
  const url = 'http://localhost:3001/persons'

  const hook = () => {
    axios.get(url).then((response) => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const resetControls = () => {
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
      resetControls()
      return
    }

    setPersons(persons.concat(personToAdd))
    resetControls()
  }

  const updateSearch = (query) => {
    setKeyword(query.trim())
  }

  const personsToShow =
    keyword === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(keyword.toLowerCase()),
        )

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox keyword={keyword} updateSearch={updateSearch} />
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Names</h2>
      <ul>
        <PersonList persons={personsToShow} />
      </ul>
    </div>
  )
}

export default App
