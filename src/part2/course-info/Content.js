import Part from './Part'

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => {
        const {name, id, exercises} = part
        return (
          <div key={id}>
            <Part name={name} exercises={exercises} />
          </div>
        )
      })}
    </div>
  )
}

export default Content
