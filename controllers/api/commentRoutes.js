const router = require('express').Router();
const { User, Recipe, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [User, Recipe]
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
