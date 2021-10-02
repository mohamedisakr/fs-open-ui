import React, {useState, useEffect} from 'react'
import {getAll, create, remove, update} from '../../services/phonebook'
import PersonForm from './PersonForm'
import PersonList from './PersonList'
import SearchBox from './SearchBox'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNUmber] = useState('')
  const [keyword, setKeyword] = useState('')

  const hook = async () => {
    const initialNotes = await getAll()
    setPersons(initialNotes)
    // getAll().then((initialNotes) => {
    //   setPersons(initialNotes)
    // })
  }

  useEffect(() => hook(), [])

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
    if (
      persons.some((person) => person.name.toLowerCase() === name.toLowerCase())
    ) {
      return true
    }
    return false
  }

  const findByNameAndReturnID = (name) => {
    const person = persons.find(
      (person) => person.name.toLowerCase() === name.toLowerCase(),
    )
    if (person) {
      return {id: person.id, name: person.name}
    }
    return null
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAdd = {
      number: newNumber.trim(),
      name: newName.trim(),
    }

    // if a number is added to an already existing user,
    // the new number will replace the old number.
    const {id, name} = findByNameAndReturnID(personToAdd.name)

    if (id) {
      // eslint-disable-next-line no-restricted-globals
      let isOk = confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`,
      )
      if (isOk) {
        const updatedPerson = {...personToAdd, id}
        update(id, updatedPerson).then((returnedNote) => {
          setPersons(persons.concat(returnedNote))
          resetControls()
        })
      }
    } else {
      create(personToAdd).then((returnedNote) => {
        setPersons(persons.concat(returnedNote))
        resetControls()
      })
    }
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
