const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Hire } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
const promisePost = Post.findAll({
  where: {
    // use the ID from the session
    user_id: req.session.user_id
  },
  attributes: [
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
      model: User,
      attributes: ['username']
    }
  ]
 });
const promiseHire = Hire.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: ['id', 
    'title', 
    'post_url', 
    'created_at',
  ],
  include: [
    {
      model: User,
      attributes: ['username']
    }
  ]
  })

Promise.all([ promisePost, promiseHire ])
    .then(data => {
        let posts = data[0];
        let hire = data[1];

       posts = data[0].map(post => post.get({ plain: true }));
       hire = data[1].map(hire => hire.get({ plain: true }));
      res.render('dashboard', { posts, hire, loggedIn: true });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
  });

// Get Review
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
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
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Edit Review
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'title',
      'bootcampName',
      'deliverFormat',
      'length',
      'price',
      'standardsMet',
      'overallRating',
      'review_comments',
      'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['comment_text', 'post_id', 'user_id', 'created_at'],
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;