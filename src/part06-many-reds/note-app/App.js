import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }

  return (
    <div>
      <NewNoteForm />
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('ALL')}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('IMPORTANT')}
        />
        nonimportant
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('NONIMPORTANT')}
        />
      </div>
      <NoteList />
    </div>
  )
}

export default App
