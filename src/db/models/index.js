const { Sequelize } = require('sequelize');
const config = require('../config/config');
const pg =require("pg")

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  dialectModule:pg
});

const db = {};

// Import Models Here
// db.User = require('./user')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
