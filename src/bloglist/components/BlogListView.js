import Blog from './Blog'

const BlogListView = ({blogs, handleDelete}) => {
  return blogs.map((blog) => {
    const {id} = blog
    console.log('====================================')
    console.log(`blog id : ${id}`)
    console.log('====================================')
    return (
      <ul key={id} className="note-list">
        <Blog key={id} blog={blog} handleDelete={() => handleDelete(id)} />
      </ul>
    )
  })
}

/*
return persons.map((person) => {
    const {id, name, number} = person

    return (
      <ul key={id} style={{listStyle: 'none', padding: 0}}>
        <PersonCart
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={() => handleDelete(id)}
        />
      </ul>
    )
  })
*/

export default BlogListView
