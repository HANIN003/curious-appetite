const router = require('express').Router();
const { User, Recipe, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// USEFUL TO CHECK HOW THINGS ARE WORKING
// router.get('/', async (req, res) => {
//     try {
//       const commentData = await Comment.findAll({
//         include:  [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//           {
//             model: Recipe,
//             attributes: ['title']
//           }
//         ]
//       });
//       res.status(200).json(commentData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      recipe_id: req.body.recipeId
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
