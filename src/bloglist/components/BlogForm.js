import React from 'react'

const BlogForm = ({onSubmit, title, url, onTitleChange, onUrlChange}) => {
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
