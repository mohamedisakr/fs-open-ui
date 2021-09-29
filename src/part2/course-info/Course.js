import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({courses}) => {
  return (
    <div>
      {courses.map((course) => {
        const {name, id, parts} = course
        return (
          <div key={id}>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
          </div>
        )
      })}
    </div>
  )
}

export default Course
