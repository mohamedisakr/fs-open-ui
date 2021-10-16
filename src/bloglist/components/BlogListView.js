import BlogCart from './BlogCart'

const BlogListView = ({blogs, handleDelete}) => {
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
          handleDelete={() => handleDelete(id)}
        />
      </div>
    )
  })
}

export default BlogListView
