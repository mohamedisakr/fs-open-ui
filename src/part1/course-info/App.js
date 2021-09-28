import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'

  const exercises = [10, 7, 14]

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <h1>{course}</h1>
      <Header name={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
