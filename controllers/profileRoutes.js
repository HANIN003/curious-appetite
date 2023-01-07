const router = require('express').Router();
const { User, Recipe, Tag } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    const recipeData = await Recipe.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        }
      ]

    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    const tagData = await Tag.findAll({

    });

    const tags = tagData.map((tag) => tag.get({ plain: true }));
    
    res.render('profile', { 
      recipes,
      user,
      tags,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
