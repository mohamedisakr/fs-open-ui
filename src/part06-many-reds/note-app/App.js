import NewNoteForm from './components/NewNoteForm'
import NoteList from './components/NoteList'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  return (
    <div>
      <NewNoteForm />
      <VisibilityFilter />
      <NoteList />
    </div>
  )
}

export default App
