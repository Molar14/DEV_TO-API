const createHttpError = require("http-errors")
const jwt = require('../lib/jwt')
const userUseCase = require('../usecases/user.usecase')

async function auth(request, response, next) {
   try {
     const authHeader = request.headers.authorization;
     if (!authHeader) {
       throw createHttpError(401, 'Authorization header is required');
     }
 
     const token = authHeader ;
     if (!token) {
       throw createHttpError(401, 'Token is required');
     }
     const payload = jwt.verify(token);
     const user = await userUseCase.getById(payload.id);
     if (!user) {
       throw createHttpError(404, 'User not found');
     }
 
     request.user = user;
     next();
   } catch (error) {
      response.status(error.status || 500)
      response.json({
         success: false,
         error: error.message,
      })
   }
}

module.exports = auth