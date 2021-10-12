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
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
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

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <span>
            <p>{user.name} logged-in</p>
            <button onClick={handleLogout}>Logout</button>
          </span>
          {blogListView()}
        </div>
      )}
    </div>
  )
}

export default App
