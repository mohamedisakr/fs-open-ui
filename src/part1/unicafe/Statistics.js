const Statistics = ({good, neutral, bad, total, average, positive}) => {
  //   const {good, neutral, bad, total, average, positive} = props
  return (
    <div>
      <h3>statistics</h3>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {average}</p>
      <p>positive: {positive} %</p>
    </div>
  )
}

export default Statistics
