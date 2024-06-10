const createError = require('http-errors')
const user = require('../models/user.model')
const encrypt = require('../lib/encrypt')

async function create(userData) {
   const userFound = await user.findOne({ email: userData.email });
 
   if (userFound) throw createError(409, "Email already in use");
 
   userData.password = await encrypt.encrypt(userData.password);
 
   const newUser = await user.create(userData);
   return newUser;
 }
 
 async function getById(id) {
   const user = await user.findById(id);
   return user;
 }
 
 module.exports = {
   create,
   getById,
 };