const router = require('express').Router();
const { User, Recipe } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const recipeData = await Recipe.findAll({
        include: User
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
