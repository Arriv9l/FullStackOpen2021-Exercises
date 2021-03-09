import React from 'react'

const Persons = ({ persons, deletePersonOf }) => {
  return (
    <div>
      {persons.map(({ id, name, number }) =>
        <div key={id}>
          {name} {number}
          <button onClick={() => deletePersonOf(id)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons