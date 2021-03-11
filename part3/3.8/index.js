const express = require('express')
const morgan = require('morgan')

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
morgan.token('json', (req, res) => JSON.stringify(req.body))

// 中间件函数按照与express服务器对象的使用方法一起使用的顺序调用
app.use(express.json())
app.use(requestLogger)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(x => x.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.get('/info', (req, res) => {
  res.send(`<div>Phonebook has info for ${persons.length} people</div>\
            <div>${Date()}</div>`)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(x => x.id !== id)

  // 如果删除资源成功，这意味着便笺存在并被删除，我们用状态码 204 no content 响应请求，并返回没有数据的响应。
  // 如果资源不存在，对于应该向 DELETE 请求返回什么状态代码并没有共识。
  // 实际上，只有 204 和 404 两个可选项。为了简单起见，我们的应用在这两种情况下都将响应 204。
  res.status(204).end()
})

const getRandomInt = max =>
  Math.floor(Math.random() * Math.floor(max))

app.post('/api/persons', (req, res) => {
  const body = req.body
  if (!body.name || !body.number) {
    // 如果接收到的数据缺少相应属性的值，服务器将使用状态码 400 bad request 响应请求
    return res.status(400).json({
      error: 'Missing name or number'
    })
  } else if (persons.find(x => x.name === body.name)) {
    // 409 Conflict
    return res.status(409).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: getRandomInt(100000000)
  }
  persons = persons.concat(person)
  res.json(person)
})

// 如果我们希望在调用路由事件处理程序之前执行中间件函数，则必须在路由之前使用中间件函数。
// 还有一些情况，我们希望在路由之后定义中间件函数。 实际上，这意味着我们定义的中间件函数只有在没有路由处理 HTTP 请求的情况下才被调用。
// 让我们在路由之后添加如下中间件，它用于捕获对不存在的路由发出的请求。 对于这些请求，中间件将返回 JSON 格式的错误消息。
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})