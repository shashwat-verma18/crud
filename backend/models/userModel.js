const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Users = sequelize.define('users', {
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  phone:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Users;