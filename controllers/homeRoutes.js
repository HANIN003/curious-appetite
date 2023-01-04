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

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
