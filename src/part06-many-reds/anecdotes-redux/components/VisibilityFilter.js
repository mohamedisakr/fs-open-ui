import React from 'react'
import {filterChange} from '../reducers/filterReducer'
import {useDispatch} from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault()
    const keyword = event.target.search.value
    event.target.search.value = ''
    dispatch(filterChange(keyword))
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input name="search" onChange={() => dispatch(handleChange)} />
    </div>
  )
}

export default VisibilityFilter