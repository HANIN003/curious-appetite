const router = require('express').Router();

const apiRoutes = require('./api');
const viewRecipesRoutes = require('./viewRecipesRoutes');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/', homeRoutes);
router.use('/recipes', viewRecipesRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
