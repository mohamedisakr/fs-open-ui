const CountryCart = ({country}) => {
  return (
    <div>
      <p key={country.numericCode}>Name: {country.name}</p>
      <p>
        Flag: <img src={country.flags.svg} alt={country.name} />
      </p>
      Languages:
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.nativeName}</li>
        ))}
      </ul>
    </div>
  )
}

export default CountryCart
