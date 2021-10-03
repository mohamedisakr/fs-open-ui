import React, {useState, useEffect} from 'react'
import {getAll, create, remove, update} from '../../services/phonebook'
import Confirmation from '../../utils/Confirmation'
import Notification from '../../utils/Notification'
import PersonForm from './PersonForm'
import PersonList from './PersonList'
import SearchBox from './SearchBox'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNUmber] = useState('')
  const [keyword, setKeyword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const hook = async () => {
    const initialNotes = await getAll()
    setPersons(initialNotes)
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

  // const preventAddDuplicateName = (name) => {
  //   if (
  //     persons.some((person) => person.name.toLowerCase() === name.toLowerCase())
  //   ) {
  //     return true
  //   }
  //   return false
  // }

  // const findByNameAndReturnID = (name) => {
  //   const person = persons.find(
  //     (person) => person.name.toLowerCase() === name.toLowerCase(),
  //   )
  //   if (person) {
  //     return {id: person.id, name: person.name}
  //   }
  //   return null
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAdd = {
      number: newNumber.trim(),
      name: newName.trim(),
    }

    create(personToAdd)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        resetControls()
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error)
      })

    /*
    // if new user create
    const result = findByNameAndReturnID(personToAdd.name)
    if (result === null) {
      try {
        create(personToAdd).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson))
          resetControls()
        })
      } catch (error) {
        console.log(error.response.data)
        setErrorMessage(error.response.data)
      }
    } else {
      // if already existing user, a number is added to an this user,
      // the new number will replace the old number.
      const {id, name} = result
      try {
        if (id) {
          // eslint-disable-next-line no-restricted-globals
          let isOk = confirm(
            `${name} is already added to phonebook, replace the old number with a new one?`,
          )
          if (isOk) {
            const updatedPerson = {...personToAdd, id}
            update(id, updatedPerson).then((returnedPerson) => {
              setPersons(persons.concat(returnedPerson))
              resetControls()
            })
          }
        }
      } catch (error) {
        console.log(error.response.data)
        setErrorMessage(error.response.data)
      }
    }
    */
    setSuccessMessage(`Contact created successfully`)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)
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
        setErrorMessage(
          `The note '${person.name}' was already deleted from server`,
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)

        setPersons(persons.filter((p) => p.id !== id))
      })

    setErrorMessage(`Contact deleted successfully`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
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
      <Confirmation message={successMessage} />
      <Notification message={errorMessage} />
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
