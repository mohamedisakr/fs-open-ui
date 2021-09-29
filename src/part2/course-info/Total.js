const Total = ({parts}) => {
  const reducer = (acc, part) => {
    return acc + part.exercises
  }

  const totalExercises = parts.reduce(reducer, 0)
  return <footer>Total of {totalExercises} exercises</footer>
}
export default Total
