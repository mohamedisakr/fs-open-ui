import React, {useState, useEffect} from 'react'
import axios from 'axios'

import SearchBox from './SearchBox'
import CountryList from './CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [keyword, setKeyword] = useState('')
  // const [country, setCountry] = useState('')

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
      <SearchBox keyword={keyword} updateSearch={updateSearch} />
      <CountryList countries={countries} countriesToShow={countriesToShow} />
    </div>
  )
}
export default App
