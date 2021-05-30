const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
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
      // serialize data before passing to template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
      //res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
 
   });
});

router.put('/edit/:id', withAuth, (req, res) => {
  Post.update({
    id: req.body.id,
    title: req.body.title,
    bootcampName: req.body.bootcampName,
    deliverFormat: req.body.deliverFormat,
    length: req.body.length, 
    price: req.body.price,
    overallRating: req.body.overallRating,
    review_comments: req.body.review_comments
  },
   {
    where: {
      id: req.body.id
    },
    attributes: [
      'id',
      'title',
      'bootcampName',
      'deliverFormat',
      'length',
      'price',
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
        res.status(404).json({ message: 'No post found with this id1' });
        return;
      }

      //const post = dbPostData.get({ plain: true });
      //res.render('edit-post', { post, loggedIn: true });
      // res.json(post);
      res.status(200).redirect("/dashboard")
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'bootcampName',
      'deliverFormat',
      'length',
      'price',
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
        res.status(404).json({ message: 'No post found with this id2' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
      // res.json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;