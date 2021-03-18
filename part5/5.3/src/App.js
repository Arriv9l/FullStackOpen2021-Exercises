import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginInfo from './components/LoginInfo'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [user])

  const handleLogin = async (event) => {
    event.preventDefault()

    const user = await loginService.login({
      username, password
    })
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    blogService.setToken(user.token)
    setUser(user)
    setUsername('')
    setPassword('')
  }

  const handleLogout = () => {
    setUser(null)
    blogService.setToken('')
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const handleCreate = async (event) => {
    event.preventDefault()

    const createdBlog = await blogService.create({
      title, author, url
    })
    setBlogs(blogs.concat(createdBlog))
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const onNameChange = ({target}) => setUsername(target.value)
  const onPasswordChange = ({target}) => setPassword(target.value)

  const onTitleChange = ({target}) => setTitle(target.value)
  const onAuthorChange = ({target}) => setAuthor(target.value)
  const onUrlChange = ({target}) => setUrl(target.value)

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <form onSubmit={handleLogin}>
          <div>
            username: 
            <input value={username} onChange={onNameChange} />
          </div>
          <div>
            password: 
            <input value={password} onChange={onPasswordChange} />
          </div>
          <button type='submit'>login</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <LoginInfo
        username={user.username}
        handleLogout={handleLogout}
      />
      <br />
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          title: 
          <input value={title} onChange={onTitleChange} />
        </div>
        <div>
          author: 
          <input value={author} onChange={onAuthorChange} />
        </div>
        <div>
          url: 
          <input value={url} onChange={onUrlChange} />
        </div>
        <button type='submit'>create</button>
      </form>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App