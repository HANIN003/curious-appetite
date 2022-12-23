const router = require('express').Router();
const { User, Recipe, Comment } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        console.log('this')
      const recipeData = await Recipe.findAll({
        // include: [
        //   {
        //     model: User,
        //     attributes: ['name'],
        //   },
        //   {
        //       model: Comment,
        //       attributes: ['content'],
        //       include: [
        //           {
        //               model: User,
        //               attributes: ['name']
        //           }
        //       ]
        //   }
        // ],
      });
  
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  console.log('still working')
      res.render('homepage', { 
        recipes, 
        // logged_in: req.session.logged_in 
      });
    } catch (err) {
        console.log("wah-wah")
      res.status(500).json(err);
    }
  });

module.exports = router;
