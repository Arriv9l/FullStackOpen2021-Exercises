const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (request, response) => {
  const notes = await Blog.find({})
  response.json(notes)
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

blogRouter.post('/', async (request, response) => {
  const body = request.body

  const user = await User.findById(body.id)

  const blog = new Blog({
    ...body,
    user: user._id
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  response.status(201).json(savedBlog)
})

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }

  // 添加了可选的代码 { new: true } 参数，这将导致使用新修改的文档而不是原始文档调用事件处理程序
  // 在更新操作中，mongoose 验证默认是关闭的，需要加上 { runValidators: true }
  // 根据 https://liuzhenglai.com/post/5dbd385f8dea5b6b578765d9
  // 由于修改了 _id 为 id，所以不能正确识别，需要加上 { context: 'query' }
  const updatedPerson = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true, runValidators: true, context: 'query' })
  response.json(updatedPerson)
})

module.exports = blogRouter