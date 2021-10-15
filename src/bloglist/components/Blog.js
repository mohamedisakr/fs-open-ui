import React from 'react'
const Blog = ({blog, handleDelete}) => {
  const {id, title, user} = blog
  const {name} = user
  return (
    <li key={id}>
      {title} {name} <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  )
}

export default Blog
