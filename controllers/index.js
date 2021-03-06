const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes')
const homeRoutes = require('./home-routes');
const searchRoutes = require('./search-routes');
const hireRoutes = require('./hire-routes')

router.use('/hire', hireRoutes)
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/search', searchRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;