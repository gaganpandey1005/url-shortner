const express=require("express")
const {generateNewShortUrl}= require("../controller/url")
const URL=require("../model/url")

const router=express.Router()

router.post("/",generateNewShortUrl)



module.exports=router   
