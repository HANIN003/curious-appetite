const router = require('express').Router();
const { User, Recipe, Comment, Tag } = require('../models');


router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
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
      ],
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render('homepage', { 
      recipes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
