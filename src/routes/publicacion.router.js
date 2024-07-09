const express = require('express')
const publicacionCase = require('../usecases/publicacion.usecase')
const auth = require('../middleware/auth.middleware')

const router = express.Router();

const route = express.Router();

route.post("/", auth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    const posts = await publicacionCase.create(req.body);

    res.json({
      succes: true,
      data: { post: posts },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      succes: false,
      error: error.message,
    });
  }
});

route.get("/", async (req, res) => {
  try {
    const search = req.query.search;
    if (!search) {
      const posts = await publicacionCase.getAll();
      res.json({
        success: true,
        message: "All Posts",
        data: { posts },
      });
    } else {
      const posts = await publicacionCase.getByTitle(search);
      res.json({
        success: true,
        message: "All posts found with " + search,
        data: { posts },
      });
    }
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
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