if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const app = express()

// 在函数体的末尾，调用作为参数传递的下一个函数。 函数将控制权交给下一个中间件
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

// https://github.com/expressjs/morgan#use-custom-token-formats
morgan.token('json', (req) => JSON.stringify(req.body))

// 中间件函数按照与express服务器对象的使用方法一起使用的顺序调用
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(requestLogger)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(x => x.toJSON()))
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    res.send(`<div>Phonebook has info for ${persons.length} people</div>\
              <div>${Date()}</div>`)
  })
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      // 如果删除资源成功，这意味着便笺存在并被删除，我们用状态码 204 no content 响应请求，并返回没有数据的响应。
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then(savedPerson => {
      res.json(savedPerson.toJSON())
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
  }

  // 添加了可选的代码 { new: true } 参数，这将导致使用新修改的文档而不是原始文档调用事件处理程序
  // 在更新操作中，mongoose 验证默认是关闭的，需要加上 { runValidators: true }
  // 根据 https://liuzhenglai.com/post/5dbd385f8dea5b6b578765d9
  // 由于修改了 _id 为 id，所以不能正确识别，需要加上 { context: 'query' }
  Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true, context: 'query' })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

// 如果我们希望在调用路由事件处理程序之前执行中间件函数，则必须在路由之前使用中间件函数。
// 还有一些情况，我们希望在路由之后定义中间件函数。 实际上，这意味着我们定义的中间件函数只有在没有路由处理 HTTP 请求的情况下才被调用。
// 让我们在路由之后添加如下中间件，它用于捕获对不存在的路由发出的请求。 对于这些请求，中间件将返回 JSON 格式的错误消息。
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})