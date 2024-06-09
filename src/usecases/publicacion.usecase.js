const createError = require('http-errors')
const publicacions = require('../models/publicacions.model')

async function index() {
   const publicacion = await publicacions.find()

   return publicacion
}

async function store(data) {
   const publicacionFound = await publicacion.findOne({ number: data.number })

   if (publicacionFound)
      throw createError(400, "Generation already in use")

   const user = await publicacions.create(data)
   return user
}

module.exports = {
   index,
   store
}