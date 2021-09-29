import Course from './Course'
import {courses} from './courses-data'

const App = () => {
  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App
