import React, { useState } from 'react'

import axios from 'axios'

const CountryInfo = ({ country }) => {
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
        {languages.map(({ name }, i) =>
          <li key={i}>{name}</li>
        )}
      </ul>
      <img src={flag} alt='' />
    </div>
  )
}

const Country = ({ country, showCountry }) => {
  return (
    <div>
      {country.name}
      <button onClick={showCountry}>show</button>
    </div>
  )
}

const Display = ({ countries, selected, setSelected }) => {
  const showCountryOf = (name) => {
    const country = countries.find(x => x.name === name)
    setSelected(<CountryInfo country={country} />)
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length > 1) {
    return (
      <div>
        {countries.map((country,i) =>
          <Country key={i} country={country} showCountry={() => showCountryOf(country.name)} />
        )}
        {selected}
      </div>
    )
  } else if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />
  } else {
    return <div>No result</div>
  }
}

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newCountry, setNewCountry ] = useState('')
  const [ selected, setSelected ] = useState('')

  const handleCountryChange = (event) => {
    let input = event.target.value
    setNewCountry(input)
    setSelected('')
    if (input)
      axios
        .get(`https://restcountries.eu/rest/v2/name/${input}`)
        .then(response => setCountries(response.data))
    else
      setCountries([])
  }

  return (
    <div>
      <div>find countries</div>
      <input value={newCountry} onChange={handleCountryChange} />
      <Display countries={countries} selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default App