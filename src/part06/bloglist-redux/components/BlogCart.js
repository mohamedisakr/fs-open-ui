const BlogCart = ({
  id,
  title,
  likes,
  url,
  user,
  handleDelete,
  handleIncLikes,
}) => {
  // const {name} = user
  console.log(`blog id : ${id}`)
  // console.log(`blog name : ${user.name}`)
  return (
    <li className="blogStyle">
      {/* <p id="idParag">{id}</p> */}
      <p id="titleParag">
        {title} <button onClick={() => handleDelete(id)}>delete</button>
      </p>
      <p id="nameParag">{user}</p>
      <p id="likesParag">
        {likes} <button onClick={() => handleIncLikes(id)}>like</button>
      </p>
      <p id="urlParag">{url}</p>
    </li>
  )
}

export default BlogCart
