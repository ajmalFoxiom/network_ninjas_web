const express = require("express")
const { createUser, loginUser,listUser,listUserMatch } = require("../Controller/userController")
const router = express.Router()
const sendJson = require("../shared/sendJson")

router.post('/',async(req,res)=>{
  const data =await createUser(req)
    sendJson(res,data)
})
router.post('/login',async(req,res)=>{
    const data =await loginUser(req)
    sendJson(res,data)
})

router.get('/listuser',async(req,res)=>{
  const result = await listUser(req, res)
  sendJson(res,result)
})
router.get('/listusermatch',async(req,res)=>{
  const result = await listUserMatch(req ,res)
  sendJson(res,result)
})



module.exports= router