const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("homepage");
});
router.get("/hire", (req, res) => {
  res.render("hire");
});
router.get("/rate", (req, res) => {
  res.render("rate");
});
router.get("/search", (req, res) => {
  res.render("search");
});

// router.get('/login', (req, res) => {
//   res.render('login');
// });
module.exports = router;
