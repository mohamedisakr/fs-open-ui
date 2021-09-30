import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [keyword, setKeyword] = useState('')
  const url = 'https://restcountries.com/v2/all'

  const hook = () => {
    axios.get(url).then((response) => {
      console.log(`response : ${response}`)
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
      <div>
        {countriesToShow.map((country) => (
          <p key={country.numericCode}>{country.name}</p>
        ))}
      </div>
    </div>
  )
}
export default App
