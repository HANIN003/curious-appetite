const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
