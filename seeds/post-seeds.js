const { Post } = require('../models');

const postdata = [
    {
        title: 'UT Austin',
        bootcamp_name: 'UT Austin',
        deliver_format: 'true',
        length: '6',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        comments: 'Amazing bootcamp and I highly recommend it.'
    },{
        title: 'UT Austin',
        bootcamp_name: 'UT Austin',
        deliver_format: 'true',
        length: '6',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        comments: 'Amazing bootcamp and I highly recommend it.'
    },{
        title: 'UT Austin',
        bootcamp_name: 'UT Austin',
        deliver_format: 'true',
        length: '6',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        comments: 'Amazing bootcamp and I highly recommend it.'
    },{
        title: 'UT Austin',
        bootcamp_name: 'UT Austin',
        deliver_format: 'true',
        length: '6',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        comments: 'Amazing bootcamp and I highly recommend it.'
    },{
        title: 'UT Austin',
        bootcamp_name: 'UT Austin',
        deliver_format: 'true',
        length: '6',
        status: 'false',
        price: '12000',
        quality: 'true',
        standardsMet: 'true',
        repeat: 'true',
        overallRating: 'true',
        comments: 'Amazing bootcamp and I highly recommend it.'
    }
    ];
    
    const seedPosts = () => Post.bulkCreate(postdata);
    
    module.exports = seedPosts;
    