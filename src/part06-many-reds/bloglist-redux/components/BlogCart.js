const BlogCart = ({title, likes, url, user, handleDelete, handleIncLikes}) => {
  // const {name} = user
  // console.log(`blog name : ${user.name}`)
  return (
    <li className="blogStyle">
      <p id="titleParag">
        {title} <button onClick={handleDelete}>delete</button>
      </p>
      <p id="nameParag">{user}</p>
      <p id="likesParag">
        {likes} <button onClick={handleIncLikes}>like</button>
      </p>
      <p id="urlParag">{url}</p>
    </li>
  )
}

export default BlogCart
