import React, {useState, useEffect} from 'react'
import {getAll, create, setToken} from '../services/blogs'
import Notification from '../utils/Notification'
// import Confirmation from '../utils/Confirmation'
import {login} from '../services/login'
import BlogListView from './components/BlogListView'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  // const [confirmMessage, setConfirMMessage] = useState(null)
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
    try {
      const loggedUserJSON = localStorage.getItem('appUserNote')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        setToken(user.token)
      }
    } catch (error) {
      console.error(error)
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

  const addBlog = (event) => {
    event.preventDefault()
    const blogToAdd = {title, url, user: user.id}

    create(blogToAdd).then((returnedNote) => {
      setBlogs(blogs.concat(returnedNote))
      setTitle('')
      setUrl('')
    })

    // setConfirMMessage(`A new blog ${title} added`)
    // setTimeout(() => {
    //   setConfirMMessage(null)
    // }, 5000)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      {/* <Confirmation message={confirmMessage} /> */}
      <div>
        {user === null ? (
          <LoginForm
            onSubmit={handleLogin}
            username={username}
            password={password}
            onUsernameChange={({target}) => setUsername(target.value)}
            onPasswordChange={({target}) => setPassword(target.value)}
          />
        ) : (
          <div>
            <span>
              <p>{user.name} logged-in</p>
              <button onClick={handleLogout}>Logout</button>
            </span>
            <BlogForm
              onSubmit={addBlog}
              title={title}
              url={url}
              onTitleChange={handleTitleChange}
              onUrlChange={handleUrlChange}
            />
            <BlogListView blogs={blogs} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
