const SearchBox = ({keyword, updateSearch}) => {
  return (
    <div>
      filter:
      <input
        value={keyword}
        onChange={(event) => updateSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBox
