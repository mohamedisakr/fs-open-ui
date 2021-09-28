const Total = ({exercises}) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue
  const totalExercises = exercises.reduce(reducer)
  return <footer>Number of exercises {totalExercises}</footer>
}
export default Total
