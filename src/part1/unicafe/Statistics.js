import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  return (
    <div>
      <h3>statistics</h3>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

export default Statistics
