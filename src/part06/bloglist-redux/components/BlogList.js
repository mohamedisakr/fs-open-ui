import {useDispatch, useSelector} from 'react-redux'
import {incrementLikes} from '../reducers/blogReducer'
import BlogCart from './BlogCart'

const BlogList = ({handleDelete}) => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state)

  return blogs.map((blog) => {
    const {id, title, likes, url, user} = blog
    console.log(`blog id : ${id}`)
    return (
      <div key={id} className="note-list">
        <BlogCart
          key={id}
          title={title}
          user={user}
          likes={likes}
          url={url}
          handleDelete={() => {}}
          handleClick={() => dispatch(incrementLikes(id))}
        />
      </div>
    )
  })
}

export default BlogList
