const createError = require('http-errors')
const user = require('../models/user.model')
const jwt = require('../lib/jwt')
const encrypt = require('../lib/encrypt')

async function login(email, password) {
   const userFound  = await user.findOne({ email: email })
   if (!userFound)
      throw createError(401, 'Invalid user')

   const isValid = await encrypt.compare(password, userFound.password)
   if (!isValid) {
      throw createError(401, 'Invalid password')
   }

   const token = jwt.sign({ id: userFound._id })

   return token
}

module.exports = {
   login
}