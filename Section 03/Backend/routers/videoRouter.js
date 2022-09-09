const express= require('express');
const router=express.Router();


router.get("/add",(req, res)=>{
    res.send("response from  video router ")
})

router.get("/upload",(req, res)=>{
    res.send("response from  video upload router ")
})

//exporting
module.exports=router;