const router = require('express').Router();

const apiRoutes = require('./api');
const viewRecipesRoutes = require('./viewRecipesRoutes');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
const searchResultsRoutes = require('./searchResultsRoutes');

router.use('/', homeRoutes);
router.use('/recipes', viewRecipesRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/search-results', searchResultsRoutes);

module.exports = router;
