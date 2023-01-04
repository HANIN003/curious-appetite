const router = require('express').Router();

const apiRoutes = require('./api');
const viewRecipesRoutes = require('./viewRecipesRoutes');
const homeRoutes = require('./homeRoutes')
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', homeRoutes);
router.use('/recipes', viewRecipesRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
