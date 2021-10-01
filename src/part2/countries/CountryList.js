import CountryCart from './CountryCart'

const CountryList = ({
  countries,
  countriesToShow,
  // setCountry,
}) => {
  const manyMatch =
    countriesToShow.length !== countries.length && countriesToShow.length > 10

  const oneMatch =
    countriesToShow.length !== countries.length && countriesToShow.length === 1

  return (
    <div>
      {manyMatch ? (
        <p>Too many matches, specify another filter.</p>
      ) : oneMatch ? (
        <CountryCart country={countriesToShow[0]} />
      ) : (
        <ul style={{listStyle: 'none', padding: 0}}>
          {countriesToShow.map((country) => {
            const {name, numericCode} = country
            return (
              <li key={numericCode}>
                {name}
                {/* <button onClick={() => setCountry(name)}>Show</button> */}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default CountryList
