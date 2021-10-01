import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [keyword, setKeyword] = useState('')
  const url = 'https://restcountries.com/v2/all'

  const hook = () => {
    axios.get(url).then((response) => {
      setCountries(response.data)
    })
  }

  useEffect(hook, [])

  const updateSearch = (query) => {
    setKeyword(query)
  }

  const countriesToShow =
    keyword === ''
      ? countries
      : countries.filter((country) =>
          country.name.toLowerCase().includes(keyword.toLowerCase()),
        )

  return (
    <div>
      <h1>Countries</h1>
      <div>
        filter:
        <input
          value={keyword}
          onChange={(event) => updateSearch(event.target.value)}
        />
      </div>
      {(function () {
        if (
          countriesToShow.length !== countries.length &&
          countriesToShow.length > 10
        ) {
          return (
            <div>
              <span>Too many matches, specify another filter</span>
            </div>
          )
        } else if (
          countriesToShow.length !== countries.length &&
          countriesToShow.length <= 10 &&
          countriesToShow.length > 1
        ) {
          return countriesToShow.map((country) => (
            <p key={country.numericCode}>{country.name}</p>
          ))
        } else if (
          countriesToShow.length !== countries.length &&
          countriesToShow.length === 1
        ) {
          return countriesToShow.map((country) => (
            <div>
              <p key={country.numericCode}>Name: {country.name}</p>
              <p>
                Flag: <img src={country.flags.svg} alt={country.name} />
              </p>
              <div>
                Languages:
                {country.languages.map((lang) => (
                  <p key={lang.iso639_1}>{lang.nativeName}</p>
                ))}
              </div>
            </div>
          ))
        }
      })()}
    </div>
  )
}
export default App