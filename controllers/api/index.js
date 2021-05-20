const router = require('express').Router();

const userRoutes = require('./user-routes.js');

const homeRoutes = require('./home-routes.js');

router.use('/users', userRoutes);

router.use('/', homeRoutes);

module.exports = router;