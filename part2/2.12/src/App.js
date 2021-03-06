import React, { useState } from 'react'

import axios from 'axios'

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <div>capital {capital}</div>
        <div>population {population}</div>
      </div>
      <h3>languages</h3>
      <ul>
        {languages.map(({ name }) =>
          <li key={name}>{name}</li>
        )}
      </ul>
      <img src={flag} alt='' />
    </div>
  )
}

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map(({ name }) =>
        <div key={name}>{name}</div>
      )}
    </div>
  )
}

const Display = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length > 1) {
    return <Countries countries={countries} />
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />
  } else {
    return <div>No result</div>
  }
}

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newCountry, setNewCountry ] = useState('')

  const handleCountryChange = (event) => {
    let input = event.target.value
    setNewCountry(input)
    if (input)
      axios
        .get(`https://restcountries.eu/rest/v2/name/${input}`)
        .then(response => setCountries(response.data))
  }

  return (
    <div>
      <div>find countries</div>
      <input value={newCountry} onChange={handleCountryChange} />
      <Display countries={countries} />
    </div>
  )
}

export default App