const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  name: String,
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
})

// https://stackoverflow.com/a/57011739
userSchema.pre('save', async function(next) {
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(this.password, saltRounds)
  this.password = passwordHash
  next()
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)