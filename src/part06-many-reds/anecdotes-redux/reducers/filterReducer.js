const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}

export default filterReducer

/*
const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    case 'CLEAR_FILTER':
      return initialState
    default:
      return state
  }
}

export const setFilter = (filter) => {
  return {type: 'SET_FILTER', filter}
  // return (dispatch) => {
  //   dispatch({type: 'SET_FILTER', filter})
  // }
}

export const clearFilter = () => {
  return {type: 'CLEAR_FILTER'}
  // return (dispatch) => {
  //   dispatch({type: 'CLEAR_FILTER'})
  // }
}

export default filterReducer
*/
