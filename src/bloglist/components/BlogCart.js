import React from 'react'
const BlogCart = ({id, title, likes, url, user, handleDelete}) => {
  // blog
  // const {id, title, user} = blog
  const {name} = user
  console.log(`blog id : ${id}`)
  return (
    <div className="blogStyle" key={id}>
      <p id="titleParag">
        {title} <button onClick={() => handleDelete(id)}>delete</button>
      </p>
      <p id="nameParag">{name}</p>
      <p id="likesParag">{likes}</p>
      <p id="urlParag">{url}</p>
    </div>
  )
}

export default BlogCart
