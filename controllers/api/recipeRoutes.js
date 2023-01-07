const router = require('express').Router();
const { User, Recipe, Tag, RecipeTag, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
      tag_id: [req.body.tag_ids]
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
