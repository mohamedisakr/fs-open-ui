import Part from './Part'

const Content = (props) => {
  const {parts} = props

  return (
    <div>
      {parts.map((part, index) => {
        const {name, exercises} = part
        return (
          <div key={index}>
            <p>
              <Part name={name} exercises={exercises} />
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Content
