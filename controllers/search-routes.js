const router = require("express").Router();
const { Post, User, Comment } = require("../models");
router.get('/', (req, res) => {
    Post.findAll({
        order: [[ 'created_at', 'DESC']],
        attributes: [
        'id',
        'title',
        'bootcampName',
        'deliverFormat',
        'length',
        'price',
        'repeat',
        'overallRating',
        'review_comments',
        'user_id'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('search', { 
          posts,
          loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;