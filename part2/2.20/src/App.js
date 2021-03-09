import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage ] = useState({})

  useEffect(() => {
    personService
      .getAll()
      .then(initialNotes => setPersons(initialNotes))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const person = persons.find(x => x.name === newName)
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(person.id, personObject)
          .then(returnedNote => {
            setPersons(persons.map(x => x.name === newName ? returnedNote : x))
            setMessage({ content: `Updated ${newName}`, type: 'success' })
            setTimeout(() => {
              setMessage({})
            }, 5000)
          })
          .catch(error => {
            setMessage({ content: `Note ${newName} was already removed from server`, type: 'error' })
          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setMessage({ content: `Added ${newName}`, type: 'success' })
          setTimeout(() => {
            setMessage({})
          }, 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePersonOf = (id) => {
    const person = persons.find(x => x.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        ._delete(id)
        .then(returnedNote => {
          setPersons(persons.filter(x => x.id !== id))
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  const filterPersons = newFilter === ''
    ? persons
    : persons.filter(({name}) => name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={newFilter} onChange={handleFilterChange} />

      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={filterPersons} deletePersonOf={deletePersonOf} />
    </div>
  )
}

export default App