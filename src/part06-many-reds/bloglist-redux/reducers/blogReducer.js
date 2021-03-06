export const getId = () => (100000 * Math.random()).toFixed(0) // Date.now()

const initialState = [
  {
    id: 16646,
    title: 'React Cookbook',
    likes: 0,
    url: 'https://www.mern.io/react-cookbook',
    user: 'Mohamed Sakr',
  },
  {
    id: 47822,
    title: 'Node.js Security',
    likes: 0,
    url: 'mern.io/node-sec',
    user: 'Mohamed Sakr',
  },
]

const blogReducer = (state = initialState, action) => {
  console.log(`state now: ${state}`)
  console.log(`action : ${action.type}`)

  switch (action.type) {
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'DELETE_BLOG': {
      const id = action.data.id
      return state.map((blog) => blog.id !== id)
    }
    case 'INCREMENT_LIKES': {
      const id = action.data.id
      const blogToChange = state.find((blog) => blog.id === id)
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1,
      }
      return state.map((blog) => (blog.id !== id ? blog : changedBlog))
    }
    default:
      return state
  }
}

export const createBlog = (title, url, user) => {
  return {
    type: 'NEW_BLOG',
    data: {
      id: getId(),
      title,
      url,
      user,
      likes: 0,
    },
  }
}

export const deleteBlog = (id) => {
  return {
    type: 'DELETE_BLOG',
    data: {id},
  }
}

export const incrementLikes = (id) => {
  return {
    type: 'INCREMENT_LIKES',
    data: {id},
  }
}

export default blogReducer
