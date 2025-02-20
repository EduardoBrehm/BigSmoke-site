const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'bigsmoke',
  password: process.env.DB_PASS || 'bigsmoke123',
  database: process.env.DB_NAME || 'bigsmoke',
  logging: false,
});

module.exports = sequelize;
