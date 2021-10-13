import React, {useState} from 'react'

const BlogForm = ({onSubmit, title, url, onTitleChange, onUrlChange}) => {
  //   const [title, setTitle] = useState('')
  //   const [url, setUrl] = useState('')

  //   const handleTitleChange = (event) => {
  //     setTitle(event.target.value)
  //   }

  //   const handleUrlChange = (event) => {
  //     setUrl(event.target.value)
  //   }

  return (
    <form onSubmit={onSubmit}>
      <div>
        Title:
        <input value={title} onChange={onTitleChange} />
      </div>
      <div>
        URL:
        <input value={url} onChange={onUrlChange} />
      </div>
      <button type="submit">save</button>
    </form>
  )
}

export default BlogForm
