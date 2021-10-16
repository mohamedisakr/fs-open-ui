import React, {useState, useEffect} from 'react'
import {getAll, create, remove, setToken} from '../services/blogs'
import Notification from '../utils/Notification'
import Confirmation from '../utils/Confirmation'
import {login} from '../services/login'
import BlogListView from './components/BlogListView'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [confirmMessage, setConfirMMessage] = useState(null)
  const [user, setUser] = useState(null)

  const getAllBlogs = async () => {
    const allBlogs = await getAll()
    setBlogs(allBlogs)
    console.log(`blogs array data : ${allBlogs}`)
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

  const handleLogin = async ({username, password}) => {
    try {
      const user = await login({username, password})
      localStorage.setItem('appUserNote', JSON.stringify(user))
      setToken(user.token)
      setUser(user)

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

  const addBlog = async (blogObject) => {
    console.log(`new blog object : ${blogObject}`)
    const returnedNote = await create(blogObject)
    console.log(`added blog : ${returnedNote}`)
    setBlogs(blogs.concat(returnedNote))
    // create(blogObject).then((returnedNote) => {
    //   setBlogs(blogs.concat(returnedNote))
    // })

    setConfirMMessage(`A new blog ${blogObject.title} added`)
    setTimeout(() => {
      setConfirMMessage(null)
    }, 5000)
  }

  const deleteBlog = (id) => {
    try {
      console.log(`blogs array data : ${blogs}`)
      // const blog = blogs.find((p) => p.id === id)
      // console.log(`token : ${user.token}`)

      const returnedBlog = remove(id)
      setBlogs(blogs.filter((p) => p.id !== id))
    } catch (error) {
      console.error(error)
      setErrorMessage(`The Blog was already deleted from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

    //#region
    // remove(id)
    //   .then((returnedBlog) => {
    //     console.log(`delete blog ${returnedBlog}`)
    //     setBlogs(blogs.filter((p) => p.id !== id))
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //     setErrorMessage(
    //       `The note '${blog.title}' was already deleted from server`,
    //     )
    //     setTimeout(() => {
    //       setErrorMessage(null)
    //     }, 5000)

    //     setBlogs(blogs.filter((p) => p.id !== id))
    //   })

    // setErrorMessage(`Blog deleted successfully`)
    // setTimeout(() => {
    //   setErrorMessage(null)
    // }, 5000)
    //#endregion
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} />
      <Confirmation message={confirmMessage} />
      <div>
        {user === null ? (
          <LoginForm loginUser={handleLogin} />
        ) : (
          <div>
            <span>
              <p>{user.name} logged-in</p>
              <button onClick={handleLogout}>Logout</button>
            </span>
            <BlogForm createBlog={addBlog} id={user.id} />
            <BlogListView blogs={blogs} handleDelete={deleteBlog} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
