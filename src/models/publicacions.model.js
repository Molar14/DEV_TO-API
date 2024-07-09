const mongoose = require('mongoose')
const modelName = 'Post'
const schema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100
   },
   image: {
      type: String,
      minLength: 2
   },
    body: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 1000
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', // Asegúrate de que 'User' es el nombre correcto del modelo de usuarios
      required: true,
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