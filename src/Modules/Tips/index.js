const express=require("express")
const { getDailyTips } = require("./controller/TipsController")
const router=express.Router()

router.get('',getDailyTips)



module.exports=router