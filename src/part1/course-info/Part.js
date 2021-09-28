const Part = (props) => {
  const {name, exercises} = props
  return (
    <div>
      {name} {exercises}
    </div>
  )
}

export default Part
