import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import {getAll, create, setToken} from '../services/blogs'
import Notification from '../utils/Notification'
import {login} from '../services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const getAllBlogs = async () => {
    const allBlogs = await getAll()
    setBlogs(allBlogs)
  }

  useEffect(() => {
    getAllBlogs()
  }, [])

  const checkLocalStorage = () => {
    const loggedUserJSON = localStorage.getItem('appUserNote')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
      console.log(`user : ${user}`)
      console.log(`token : ${user.token}`)
    }
  }

  useEffect(checkLocalStorage, [])

  const clearCredentials = () => {
    setUsername('')
    setPassword('')
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await login({username, password})
      localStorage.setItem('appUserNote', JSON.stringify(user))
      setToken(user.token)
      setUser(user)
      clearCredentials()
      console.log(`user : ${user}`)
      console.log(`token : ${user.token}`)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    console.log(`user : ${user}`)
    console.log(`token : ${user.token}`)

    // reset localStorage
    localStorage.removeItem('appUserNote')

    // reset token
    setToken(null)

    // reset user
    setUser(null)
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({target}) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({target}) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const blogListView = () => (
    <ul className="note-list">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </ul>
  )

  const addBlog = (event) => {
    event.preventDefault()
    const blogToAdd = {title, url, author: user.id}

    create(blogToAdd).then((returnedNote) => {
      setBlogs(blogs.concat(returnedNote))
      setTitle('')
      setUrl('')
    })
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const blogForm = () => (
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

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      <div>
        {user === null ? (
          loginForm()
        ) : (
          <div>
            <span>
              <p>{user.name} logged-in</p>
              <button onClick={handleLogout}>Logout</button>
            </span>
            <div> {blogForm()}</div>
            <div> {blogListView()}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
