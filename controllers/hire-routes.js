const router = require('express').Router();
const { Hire, User} = require('../models');

// get all portfolios
router.get('/', (req, res) => {
    console.log('======================');
    Hire.findAll({
      order: [['created_at', 'DESC']], 
      attributes: [
      'id',
      'title', 
      'post_url',
      'created_at' 
    ],
    include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    }).then(dbPostData => {
      const hire = dbPostData.map(post => post.get({ plain: true }));
      res.render('hire', { 
        hire,
        loggedIn: req.session.loggedIn
       });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.get('/', (req, res) => {
    Hire.findAll({
      where: {
        id: req.params.id
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
    .then(dbPostData => {
      const hire = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { 
        hire,
        loggedIn: req.session.loggedIn
       });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Hire.create({
      title: req.body.title,
      post_url: req.body.post_url,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/edit/:id', (req,res) => {
    Hire.update (
    {
        title: req.body.title
    },
    {
        where: {
            id:req.params.id
        }
      }
    )
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json ({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Hire.destroy({
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
  });

  module.exports = router;