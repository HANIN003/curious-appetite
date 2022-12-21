const router = require('express').Router();
const { User, Recipe } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: Recipe
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
