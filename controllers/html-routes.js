const router = require('express').Router();


router.get('/', (req, res) => {
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  var object = {

  name: 'nancy',

  }
    
  res.render('homepage', object);
  });

  router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;