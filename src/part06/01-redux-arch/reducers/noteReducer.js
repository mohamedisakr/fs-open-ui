const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    //   return state.concat(action.data)
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id
      const noteToChange = state.find((note) => note.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }
      return state.map((note) => (note.id !== id ? note : changedNote))
    }

    default:
      return state
  }
}
export default noteReducer
