const router = require('express').Router();
const { User, Recipe, Tag, RecipeTag, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const recipeData = await Recipe.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Tag,
            attributes: ['tag_name'],
            through: {
              attributes: []
            }
          },
          {
            model: Comment,
            attributes: ['content'],
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
          }
        ]
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
