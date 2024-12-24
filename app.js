const express = require('express');
const app = express();
const tipsRouter=require("./src/Modules/Tips/index")
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});


app.get('/', (req, res) => {
    res.send('Deployed here');
  });

app.use("/tips",tipsRouter)
  
module.exports = app;
