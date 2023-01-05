// I don't think this does anything

const router = require('express').Router();
const { Tag, Recipe, RecipeTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [
          {
            model: Recipe,
            attributes: ['title'],
            through: {
              attributes: []
            }
          }
        ]
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;
