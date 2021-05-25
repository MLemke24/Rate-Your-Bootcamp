const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/hire', (req, res) => {
  
  res.render('hire');
});

router.get('/rate', (req, res) => {

  res.render('rate');
});

router.get('/search', (req, res) => {

  res.render('search');
});

router.get('/homepage', (req, res) => {
  res.render('homepage');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
