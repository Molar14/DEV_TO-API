const mongoose = require('mongoose')
const modelName = 'Users'
const schema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100
   },
   ProfilePic: {
      type: String,
      required: true,
      minLength: 2
   },
   email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
   },
   password: {
      type: String,
      required: true
   },
   Updated_at: {
      type: Date,
      default: Date.now
   },
   created_at: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model(modelName, schema)