const express = require("express");
const serverless = require('serverless-http');
const app = express();

const cors = require("cors");
app.use(cors());
require("dotenv").config();

// for req,body
app.use(express.json());
// for req.body url-form-encoded
app.use(express.urlencoded({ extended: true }));

const PORT=process.env.PORT || 8082

app.get("/",(req,res)=>{
    res.send("Hello Deployed")
  })


const TipsRouter=require("./src/Modules/Tips/index")

app.use("/tips/",TipsRouter)
  
  app.listen(PORT,(err)=>{
      if(err){
          console.log("server error")
      }else{
  
          console.log(`Server Running  ✔️   on http://localhost:${PORT}/`)
      }
  })


app.use('/.netlify/App', router);
module.exports.handler = serverless(app);
  