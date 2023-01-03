const router = require('express').Router();

const apiRoutes = require('./api');
const viewRecipesRoutes = require('./viewRecipesRoutes');
const homeRoutes = require('./homeRoutes')

router.use('/', homeRoutes);
router.use('/recipes', viewRecipesRoutes);
router.use('/api', apiRoutes);




module.exports = router;
