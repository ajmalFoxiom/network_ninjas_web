const express = require("express")

const router =express.Router()
const sendJson =require("../Routes/userRoute")
const { createDetails } = require("../Controller/userDetails")

router.post('/addDetails',async(req,res)=>{

    const data =await createDetails(req)
    sendJson(res,data)
})

module.exports = router