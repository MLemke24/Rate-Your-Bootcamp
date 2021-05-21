const { Post } = require('../models');

const postdata = [
    {
        title: 'UT Austin',
        bootcampName: 'UT Austin',
        deliverFormat: 'true',
        length: '6',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        review_comments: 'Amazing bootcamp and I highly recommend it.'
    },    {
        title: 'Coding Dojo',
        bootcampName: 'Coding Dojo',
        deliverFormat: 'true',
        length: '14',
        status: 'false',
        price: '16000',
        quality: 'false',
        standardsMet: 'false',
        repeat: 'false',
        overallRating: 'true',
        review_comments: 'This was not what I expected for my money.'
    },    {
        title: 'Flatiron School',
        bootcampName: 'Flatiron School',
        deliverFormat: 'true',
        length: '12',
        status: 'true',
        price: '17000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        review_comments: 'Excellent program through and through.'
    },    {
        title: 'Bethel',
        bootcampName: 'Bethel School of Technology',
        deliverFormat: 'true',
        length: '33',
        status: 'true',
        price: '16000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        review_comments: 'I was interested in this school because they are faith based which aligns with my values. I thought this would be a great way to have support in my career change.'
    },    {
        title: 'Flatiron',
        bootcampName: 'Flatiron School',
        deliverFormat: 'true',
        length: '12',
        status: 'false',
        price: '17000',
        quality: 'true',
        standardsMet: 'false',
        repeat: 'false',
        overallRating: 'false',
        review_comments: 'This was not for me. I saw great reviews, but the support was not what I expected.'
    },    {
        title: 'DOJO!!!',
        bootcampName: 'Coding Dojo',
        deliverFormat: 'true',
        length: '14',
        status: 'true',
        price: '16000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        review_comments: '10/10 would highly recommend. The format was easy to follow and the instructors were great.'
    },    {
        title: 'UT Austin',
        bootcampName: 'UT Austin',
        deliverFormat: 'true',
        length: '24',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'false',
        repeat: 'false',
        overallRating: 'true',
        review_comments: 'I was going to take this at Rice, then found out they were the same. This needs to be made clear that it\'s all the same company.'
    },    {
        title: 'Not sure',
        bootcampName: 'Code Ninjas',
        deliverFormat: 'true',
        length: '36',
        status: 'false',
        price: '120',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        review_comments: 'Not sure if this is the right place, but since we\'re talking about Code camps, I wanted to add Code Ninjas. I send my child here after school and she absolutely loves it! I wanted to share our good experience.'
    },

    ];
    
    const seedPosts = () => Post.bulkCreate(postdata);
    
    module.exports = seedPosts;
    