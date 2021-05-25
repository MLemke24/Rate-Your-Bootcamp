const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./home-routes');

router.use('/api', apiRoutes);

router.use('/', viewRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;