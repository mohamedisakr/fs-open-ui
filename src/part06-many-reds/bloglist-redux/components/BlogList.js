import {useDispatch, useSelector} from 'react-redux'
import {incrementLikes, deleteBlog} from '../reducers/blogReducer'
import BlogCart from './BlogCart'

const BlogList = () => {
  const dispatch = useDispatch()

  const blogs = useSelector(({filter, blogs}) => {
    if (filter === null) {
      return blogs
    }
    const regex = new RegExp(filter, 'i')
    return blogs.filter((blog) => blog.title.match(regex))
  })

  return (
    <ul className="note-list">
      {blogs.map((blog) => {
        const {id, title, likes, url, user} = blog
        // const {name} = user
        console.log(`blog id : ${id}`)
        // console.log(`blog name : ${name}`)
        return (
          <BlogCart
            key={id}
            title={title}
            user={user}
            likes={likes}
            url={url}
            handleDelete={() => dispatch(deleteBlog(id))}
            handleIncLikes={() => dispatch(incrementLikes(id))}
          />
        )
      })}
    </ul>
  )
  // handleClick={() => dispatch(incrementVote(anecdot.id))}
  // return blogs.map((blog) => {
  //   const {id, title, likes, url, user} = blog
  //   const {name} = user
  //   console.log(`blog id : ${id}`)
  //   console.log(`blog title : ${title}`)
  //   console.log(`blog user : ${user}`)
  //   console.log(`blog name : ${name}`)
  //   return (
  //     <ul className="note-list">
  //       <BlogCart
  //         key={id}
  //         title={title}
  //         user={name}
  //         likes={likes}
  //         url={url}
  //         handleDelete={() => dispatch(deleteBlog(id))}
  //         handleClick={() => dispatch(incrementLikes(id))}
  //       />
  //     </ul>
  //   )
  // })
}

export default BlogList
