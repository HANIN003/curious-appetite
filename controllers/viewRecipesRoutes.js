const router = require('express').Router();
const { User, Recipe, Comment, Tag } = require('../models');

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      // where: {
      //   id: req.body.searchResults
      // },
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
      ],
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    res.render('viewrecipes', { 
     
      recipes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
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

    const recipe = recipeData.get({ plain: true });
    const recipeId = req.params.id

    res.render('recipe', {
      ...recipe,
      recipeId,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


