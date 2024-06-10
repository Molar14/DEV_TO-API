const express = require('express')
const publicacionCase = require('../usecases/publicacion.usecase')
const auth = require('../middleware/auth.middleware')

const router = express.Router();

const route = express.Router();

router.post("/", auth, async (request, response) => {
  try {
   request.body.user = request.user.id;
    const posts = await publicacionCase.create(request.body);

    response.json({
      succes: true,
      data: { post: posts },
    });
  } catch (error) {
   response.status(error.status || 500);
   response.json({
      succes: false,
      error: error.message,
    });
  }
});

router.get("/", async (request, response) => {
  try {
    const search = request.query.search;
    if (!search) {
      const posts = await publicacionCase.getAll();
      response.json({
        succes: true,
        message: "All Posts",
        data: { posts },
      });
    } else {
      const posts = await publicacionCase.getByTitle(search);
      response.json({
        succes: true,
        message: "All posts finded with " + search,
        data: { posts },
      });
    }
  } catch (error) {
   response.status(error.status || 500);
   response.json({
      succes: false,
      error: error.message,
    });
  }
});

router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const postUpdate = await publicacionCase.updateById(id, request.body);
    response.json({
      succes: true,
      data: { post: postUpdate },
    });
  } catch (error) {
   response.status(error.status || 500);
   response.json({
      succes: false,
      error: error.message,
    });
  }
});

router.delete("/:id", auth, async (request, response) => {
  try {
    const payload = jwt.verify(request.headers.authorization);
    const idUserActive = await payload.id;
    const { id } = request.params;
    const post = await publicacionCase.getById(id);
    const idUserPost = post.user;

    const postDeleted = await publicacionCase.deleteById(
      id,
      idUserPost,
      idUserActive
    );

    response.json({
      succes: true,
      data: { post: postDeleted },
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