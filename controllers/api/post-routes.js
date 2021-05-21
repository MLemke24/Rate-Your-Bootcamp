const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        order: [[ 'created_at', 'DESC']],
        attributes: ['id', 'title', 'bootcampName', 'deliverFormat', 'length', 
        'status', 'price', 'quality', 'standardsMet', 'repeat', 'overallRating', 'review_comments', 'user_id'],
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
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'bootcampName', 'deliverFormat', 'length', 
        'status', 'price', 'quality', 'standardsMet', 'repeat', 'overallRating', 'review_comments', 'user_id'],
    include: [
        {
          model: Comment,
          attritubes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        bootcampName: req.body.bootcampName,
        deliverFormat: req.body.deliverFormat,
        length: req.body.length,
        status: req.body.status,
        price: req.body.price,
        quality: req.body.quality,
        standardsMet: req.body.standardsMet,
        repeat: req.body.repeat,
        overallRating: req.body.overallRating,
        review_comments: req.body.review_comments,
        user_id: req.body.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

// Login
router.post('/login', (req, res) =>{
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

    res.json({ user: dbUserData, message: 'You are now logged in!' });
  });
 })
});

// Logout
router.post('/logout', (req, res) =>{
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
})

// PUT update a post 
router.put('/:id', (req, res) => {
  Post.update(
      {
        title: req.body.title,
        bootcampName: req.body.bootcampName,
        deliverFormat: req.body.deliverFormat,
        length: req.body.length,
        status: req.body.status,
        price: req.body.price,
        quality: req.body.quality,
        standardsMet: req.body.standardsMet,
        repeat: req.body.repeat,
        overallRating: req.body.overallRating,
        review_comments: req.body.review_comments,
        user_id: req.body.user_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

// DELETE a post 
router.delete('/:id', (req, res) => {
  Post.destroy({
      where: {
        id: req.params.id
      }
      })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;