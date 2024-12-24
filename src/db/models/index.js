const { Sequelize } = require('sequelize');
const config = require('../config/config');
const pg =require("pg")

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  dialectModule:pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Optional, depending on your provider
    },
  }
});

const db = {};

// Import Models Here
db.Devs = require('./devs')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
