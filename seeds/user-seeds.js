const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'djkat1',
    email: 'djkat1@gmail.com',
    password: 'password123'
  },
  {
    username: 'DCCodes',
    email: 'dc@codelove.com',
    password: 'password123'
  },
  {
    username: 'HamKingKoder',
    email: 'HamTA@uta.com',
    password: 'password123'
  },
  {
    username: 'Octo_Cat',
    email: 'Rhodes@gmail.com',
    password: 'password123'
  },
  {
    username: 'LaylaCanDo',
    email: 'layladesigns@yahoo.com',
    password: 'password123'
  },
  {
    username: 'Node_Monster',
    email: 'nathan@sbc.com',
    password: 'password123'
  },
  {
    username: 'harper501',
    email: 'harper_jones501@aol.com',
    password: 'password123'
  },
  {
    username: 'tony_is_alive',
    email: 'tisalive@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
