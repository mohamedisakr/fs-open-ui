import React, {useState, useEffect} from 'react'
import {getAll, create, remove} from '../../services/phonebook'
import PersonForm from './PersonForm'
import PersonList from './PersonList'
import SearchBox from './SearchBox'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNUmber] = useState('')
  const [keyword, setKeyword] = useState('')

  const hook = () => {
    getAll().then((initialNotes) => {
      setPersons(initialNotes)
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
      number: newNumber,
      name: newName,
    }

    const isExist = preventAddDuplicateName(personToAdd.name)
    if (isExist === true) {
      alert(`${newName} is already added to phonebook`)
      resetControls()
      return
    }

    create(personToAdd).then((returnedNote) => {
      setPersons(persons.concat(returnedNote))
      resetControls()
    })
  }

  const updateSearch = (query) => {
    setKeyword(query.trim())
  }

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id)

    remove(id)
      .then((returnedNote) => {
        console.log(`delete contact ${returnedNote}`)
        setPersons(persons.filter((p) => p.id !== id))
      })
      .catch((error) => {
        alert(`the note '${person.name}' was already deleted from server`)
        console.error(error)
        setPersons(persons.filter((p) => p.id !== id))
      })
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
      <PersonList persons={personsToShow} handleDelete={deletePerson} />
    </div>
  )
}

export default App
