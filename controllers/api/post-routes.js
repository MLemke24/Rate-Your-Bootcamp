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

module.exports = router;