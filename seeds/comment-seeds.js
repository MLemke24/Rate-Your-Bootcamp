const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great support',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Haven\'t heard much about this.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'My experience was different. I received tremendous support and never felt left out.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Was your class based on modules or activities?',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Would you take this class again?',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'I had a friend to who took this class and it was not satisfied with the support received.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'lol!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Glad you survived!',
    user_id: 8,
    post_id: 1
  },
  {
    comment_text: 'If you don\'t mind me asking, who was your instructor?',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'Yes, I would love to reach out!',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'NIGHTMARE',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'No way! I absolutely loved it. The career services support was incredible. 10/10 would take this again in a heartbeat!!!',
    user_id: 8,
    post_id: 3
  },
 
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
