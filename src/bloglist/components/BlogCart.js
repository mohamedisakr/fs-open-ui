import React from 'react'
const BlogCart = ({id, title, likes, url, user, handleDelete}) => {
  // blog
  // const {id, title, user} = blog
  const {name} = user
  console.log(`blog id : ${id}`)
  return (
    <div className="blogStyle" key={id}>
      <p>
        {title} <button onClick={() => handleDelete(id)}>delete</button>
      </p>
      <p>id: {id}</p>
      <p>{name}</p>
      <p>{likes}</p>
      <p>{url}</p>
    </div>
  )
}

export default BlogCart
