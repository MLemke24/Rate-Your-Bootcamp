const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/rate", (req, res) => {
  res.render("rate");
});
router.get("/search", (req, res) => {
  res.render("search");
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
})
module.exports = router;
