import Content from './Content'
import Header from './Header'

const Course = ({courses}) => {
  return (
    <div>
      {courses.map((course) => {
        const {name, id, parts} = course
        return (
          <div key={id}>
            <Header name={name} />
            <Content parts={parts} />
          </div>
        )
      })}
    </div>
  )
}

export default Course
