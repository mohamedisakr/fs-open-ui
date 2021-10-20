import React from 'react'
import {useDispatch} from 'react-redux'
import {createBlog, getId} from '../reducers/blogReducer'

const BlogForm = () => {
  const dispatch = useDispatch()

  const addBlog = (event) => {
    // try {
    console.log(`event target : ${event.target}`)
    event.preventDefault()
    const title = event.target.title.value
    event.target.title.value = ''
    const url = event.target.url.value
    event.target.url.value = ''
    dispatch(createBlog(title, url, getId()))
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <form onSubmit={addBlog}>
      <div>
        Title:
        <input name="title" placeholder="Blog Title" />
      </div>
      <div>
        URL:
        <input name="url" placeholder="Blog URL" />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

export default BlogForm
