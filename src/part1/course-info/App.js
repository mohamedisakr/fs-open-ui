import React from 'react'
// import Content from './Content'
// import Header from './Header'
// import Total from './Total'
import Counter from './Counter'

const App = () => {
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //     },
  //   ],
  // }

  // const {name, parts} = course
  // const exercises = parts.map(({exercises}) => exercises)

  return (
    <div>
      <Counter />
      {/* <Header name={name} />
      <Content parts={parts} />
      <Total exercises={exercises} /> */}
    </div>
  )
}

export default App
