import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)

  const filterPersons = newFilter === ''
    ? persons
    : persons.filter(({name}) => name.toLowerCase().includes(newFilter))

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <div>
          filter shown with
          <input value={newFilter} onChange={handleFilterChange} />
        </div>
      </div>
      <div>
        <h2>add a new</h2>
        <form onSubmit={addPerson}>
          <div>
            name:
            <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number:
            <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        <div>
          {filterPersons.map(({name, number}) =>
            <div key={name}>{name} {number}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App