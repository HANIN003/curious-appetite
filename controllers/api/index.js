const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const tagRoutes = require('./tagRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/tags', tagRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
