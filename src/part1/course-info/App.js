import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  /*
  const course = 'Half Stack application development'

  const exercises = [10, 7, 14]

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]
  */
  const parts = [part1, part2, part3]
  const exercises = parts.map(({exercises}) => exercises)
  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
