const router = require('express').Router();


router.get('/', (req, res) => {
  var object = {

  name: 'nancy',

  }
    
  res.render('home', object);
  });

  router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;