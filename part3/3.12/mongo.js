const mongoose = require('mongoose')

if ( process.argv.length < 3 ) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
} else if ( process.argv.length === 4 ) {
  console.log('Please provide the number as an argument: node mongo.js <password> <name> <number>')
  process.exit(1)
}

const [ password, name, number ] = process.argv.slice(2)

const url =
  `mongodb+srv://fullstack:${password}@cluster0.ggztr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({ name, number })

  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(({ name,number }) => {
      console.log(`${name} ${number}`)
    })
    mongoose.connection.close()
  })
}