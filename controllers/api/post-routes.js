const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

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
          attributes: ['comment_text', 'post_id', 'user_id', 'created_at'],
          include: {

          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
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
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  console.log(req.body);
    Post.create({
        id: req.body.id,
        title: req.body.title,
        bootcampName: req.body.bootcampName,
        deliverFormat: req.body.deliverFormat,
        length: req.body.length,
        price: req.body.price,
        repeat: req.body.repeat,
        overallRating: req.body.overallRating,
        review_comments: req.body.review_comments,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {

      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a post 
router.put('/:id', (req, res) => {
  Post.update(
      {
        id: req.body.id,
        title: req.body.title,
        bootcampName: req.body.bootcampName,
        deliverFormat: req.body.deliverFormat,
        length: req.body.length,
        price: req.body.price,
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
          res.status(404).json({ message: 'No post found with this id3' });
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
          res.status(404).json({ message: 'No post found with this id4' });
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