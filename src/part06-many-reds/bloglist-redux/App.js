import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  return (
    <div>
      <BlogForm />
      <VisibilityFilter />
      <BlogList />
    </div>
  )
}

export default App
