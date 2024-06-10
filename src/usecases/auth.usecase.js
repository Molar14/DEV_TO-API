const createError = require('http-errors')
const user = require('../models/user.model')
const jwt = require('../lib/jwt')
const encrypt = require('../lib/encrypt')

async function login(email, password) {
   const users = await user.findOne({ email: email })
   if (!users)
      throw createError(401, 'Invalid data')

   const isValid = await encrypt.compare(password, user.password)
   if (!isValid) {
      throw createError(401, 'Invalid data')
   }

   const token = jwt.sign({ id: user._id })

   return token
}

module.exports = {
   login, logout
}