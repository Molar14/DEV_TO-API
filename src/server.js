const cors = require('cors')
const express = require('express')

const app = express()

const authRouter = require('./routes/auth.router')
const userRouter = require('./routes/user.router')
const publicacionRouter = require('./routes/publicacion.router')

app.use(cors())
app.use(express.json()) // Middleware

// Rutas
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/post', publicacionRouter)

app.get('/', (request, response) => {
   response.json({
      message: 'Koders APIv1'
   })
})

module.exports = app