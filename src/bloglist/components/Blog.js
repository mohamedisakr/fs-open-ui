import React from 'react'
const Blog = ({blog}) => {
  const {id, title, user} = blog
  const {name} = user
  return (
    <li key={id}>
      {title} {name}
    </li>
  )
}

export default Blog
