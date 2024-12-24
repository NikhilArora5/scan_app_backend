const express = require('express');
const app = express();
const { sequelize } = require('./src/db/models/index');
const tipsRouter=require("./src/modules/Tips/index")
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});


app.get('/', (req, res) => {
    res.send('Deployed here');
  });

app.use("/tips",tipsRouter)

// Database Initialization
const connectDatabase = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected...');
      await sequelize.sync({ force: false }); // Ensure models are synced
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1); // Exit the application if the database connection fails
    }
  };
  
  connectDatabase();
  
module.exports = app;
