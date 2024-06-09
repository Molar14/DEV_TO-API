require('dotenv').config()
const mongoose = require('mongoose')

const {
   DB_USER,
   DB_PASSWORD,
   DB_HOST,
   DB_NAME
} = process.env

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB_HOST}/`

function connect() {
   return mongoose.connect(URI)
}

module.exports = { connect }