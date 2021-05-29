const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("homepage");
});
router.get("/hire", (req, res) => {
  res.render("hire");
});
router.get("/review", (req, res) => {
  res.render("review");
});
router.get("/search", (req, res) => {
  res.render("search");
});
router.get("/dashboard/edit", (req, res) => {
  console.log("home routes file");

//   when this renders, we need to get a GET request SO THE INFO POPULATES TO THE EDIT PAGE
  res.render("edit-post");
});

// router.get('/login', (req, res) => {
//   res.render('login');
// });
module.exports = router;
