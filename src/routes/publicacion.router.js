const express = require('express')
const publicacionCase = require('../usecases/publicacion.usecase')
const auth = require('../middleware/auth.middleware')

const router = express.Router();

// Index
router.get("/", auth, async (request, response) => {
   try {
      const publicacion = await publicacionCase.index()
      response.json({
         sucess: true,
         data: {
            publicacion
         }
      })
   } catch (error) {
      response.status(error.status || 500);
      response.json({
         success: false,
         error: error.message,
      })
   }
})

// store
router.post('/', auth, async (request, response) => {
   try {
      const publicacion = await publicacionCase.store(request.body)
      response.json({
         success: true,
         data: {
            publicacion
         }
      })
   } catch (error) {
      response.status(error.status || 500);
      response.json({
         success: false,
         error: error.message,
      })
   }
})

module.exports = router