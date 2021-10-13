import Blog from './Blog'

const BlogListView = ({blogs}) => {
  return (
    <ul className="note-list">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </ul>
  )
}

export default BlogListView
