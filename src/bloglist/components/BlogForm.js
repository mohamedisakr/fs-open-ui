import React, {useState} from 'react'

// const BlogForm = ({onSubmit, title, url, onTitleChange, onUrlChange}) => {
const BlogForm = ({createBlog, id}) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const addBlog = (event) => {
    try {
      console.log(`event target : ${event.target}`)
      event.preventDefault()
      // const blogToAdd = {title, url, user: user.id}
      createBlog({title, url, user: id})
      // create(blogToAdd).then((returnedNote) => {
      //   setBlogs(blogs.concat(returnedNote))
      //   setTitle('')
      //   setUrl('')
      // })

      setTitle('')
      setUrl('')
    } catch (error) {
      console.error(error)
    }

    // setConfirMMessage(`A new blog ${title} added`)
    // setTimeout(() => {
    //   setConfirMMessage(null)
    // }, 5000)
  }

  return (
    <form onSubmit={addBlog}>
      <div>
        Title:
        <input value={title} onChange={handleTitleChange} />
      </div>
      <div>
        URL:
        <input value={url} onChange={handleUrlChange} />
      </div>
      <button type="submit">save</button>
    </form>
  )
}

export default BlogForm
