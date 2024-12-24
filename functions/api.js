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

// app.get("/",(req,res)=>{
//     res.send("Hello Deployed")
//   })

const router=express.Router()
const TipsRouter=require("../src/Modules/Tips/index");
const { getDailyTips } = require("../src/Modules/Tips/controller/TipsController");
router.get("/tips",getDailyTips)


// app.use("/tips/",TipsRouter)
// app.use("/api/", res.send("Hello Deployedapai "))
  
  app.listen(PORT,(err)=>{
      if(err){
          console.log("server error")
      }else{
  
          console.log(`Server Running  ✔️   on http://localhost:${PORT}/`)
      }
  })


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
  