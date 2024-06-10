const express = require('express')
const userCase = require('../usecases/user.usecase')


const router = express.Router();

router.post("/", async (request, response) => {
   try {
     const user = await userCase.create(request.body);
 
     response.json({
       succes: true,
       data: { user: user },
     });
   } catch (error) {
      response.status(error.status || 500);
      response.json({
       succes: false,
       error: error.message,
     });
   }
 });
 
 router.get("/:id", async (request, response) => {
   try {
     const { id } = request.params;
     const user = await userCase.getById(id);
 
     response.json({
       succes: true,
       data: { user },
     });
   } catch (error) {
      response.status(error.status || 500);
      response.json({
       succes: false,
       error: error.message,
     });
   }
 });
 
 module.exports = route;