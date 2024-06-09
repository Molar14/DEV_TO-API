const express = require('express')
const userCase = require('../usecases/user.usecase')
const auth = require('../middleware/auth.middleware')

const router = express.Router();

// Index
router.get("/", auth, async (request, response) => {
   try {
      const user = await userCase.index()
      response.json({
         sucess: true,
         data: {
            user
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
router.post('/', async (request, response) => {
   try {
      const user = await userCase.store(request.body)
      response.json({
         success: true,
         data: {
            user
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

// show
router.get('/:id', auth, async (request, response) => {
   try {
      const { id } = request.params
      const user = await userCase.getById(id)
      response.json({
         success: true,
         data: {
            user
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

// update
router.patch('/:id', auth, async (request, response) => {
   try {
      const { id } = request.params
      const user = await userCase.updateById(id, request.body)
      response.json({
         sucess: true,
         data: {
            user
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

// destroy
router.delete("/:id", auth, async (request, response) => {
   try {
      const { id } = request.params
      await userCase.destroy(id)
      response.json({
         sucess: true,
         data: {

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

module.exports = router;