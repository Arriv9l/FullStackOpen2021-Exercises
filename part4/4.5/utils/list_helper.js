const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, current) => {
    return sum + current.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  const likesList = blogs.map(x => x.likes)
  const maxIndex = likesList.indexOf(Math.max(...likesList))
  const { title, author, likes } = blogs[maxIndex]
  return { title, author, likes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}