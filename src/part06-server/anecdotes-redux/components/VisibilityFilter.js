import React from 'react'
import {filterChange} from '../reducers/filterReducer'
import {useDispatch} from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(filterChange(event.target.value))
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input name="search" onChange={handleChange} />
    </div>
  )
}

export default VisibilityFilter
