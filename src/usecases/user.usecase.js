const createError = require('http-errors')
const user = require('../models/user.model')
const { encrypt } = require('../lib/encrypt')

async function index() {
   const Users = await user.find().populate("generation")

   return Users
}

async function store(data) {
   const userFound = await user.findOne({email: data.email})

   if (userFound)
      throw createError(400, "Email already in use")

   data.password = await encrypt(data.password)

   const users = await user.create(data)
   return users
}

async function show(id) {
   const users = await user.findById(id)
   return users
}

async function update(id, data) {
   const users = await user.findByIdAndUpdate(id, data, {
      new: true
   })
   return users
}

async function destroy(id) {
   await user.findByIdAndDelete(id)
   return 
}

module.exports = {
   index,
   store,
   show,
   update,
   destroy
}