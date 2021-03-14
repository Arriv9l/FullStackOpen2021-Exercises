const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, current) => {
    return sum + current.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  const mostLikesBlog = _.maxBy(blogs, 'likes')
  const { title, author, likes } = mostLikesBlog
  return { title, author, likes }
}

const mostBlogs = (blogs) => {
  const mostBlogsAuthor = _(blogs)
    .groupBy('author') // { 'A': [], 'B': [] }
    .mapValues(x => x.length) // { 'A': 1, 'B': 2 }
    .toPairs() // [ ['A',1], ['B',2] ]
    .maxBy(x => x[1]) // ['B',2]
  const [ author, blogsNum ] = mostBlogsAuthor
  return {
    author,
    blogs: blogsNum,
  }
}

const mostLikes = (blogs) => {
  const mostLikesAuthor = _(blogs)
    .groupBy('author') // { 'A': [], 'B': [] }
    .mapValues(x => x.reduce((sum, curr) => sum + curr.likes, 0)) // { 'A': 1, 'B': 2 }
    .toPairs() // [ ['A',1], ['B',2] ]
    .maxBy(x => x[1]) // ['B',2]
  const [ author, likes ] = mostLikesAuthor
  return { author, likes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}