const express = require("express")
const router = express.Router()
const User = require('../models/user')
const { body, validationResult } = require('express-validator');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const jwtSkey="megamanaghshjjbbauauh"

router.post("/createuser",[
    body('email').isEmail(),
    body('password','incorrect password').isLength({min:5}).withMessage("password need min 5 char"),
    body('name').isLength({min:5}).withMessage('min 5 char req for username')
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    let email = req.body.email;
    const emailCheck= await User.findOne({email});
     if(emailCheck) return res.status(400).json({msg:"Email Already in use",Status:false});

    const salt = await bcrypt.genSalt(10);
    let setPassword = await bcrypt.hash(req.body.password,salt)
try{
   await User.create({
        name:req.body.name,
        password:setPassword,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true})
}
catch(err){
    console.log(err)
    res.json({success:false})
}
})

router.post("/loginuser",[
    body('email').isEmail(),body('password').isLength({min:5})],async (req,res)=>{


        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        let email=req.body.email;
try{
   let UserData=await User.findOne({email});
   if(!UserData)
   return res.status(400).json({errors:"Incorrect username"});
const pwdcompare = await bcrypt.compare(req.body.password,UserData.password)
// console.log(UserData.password)
if(!pwdcompare) return res.status(400).json({errors:"Incorrect password"});
const data={
    user:{
id:UserData.id
    }
}
const authToken=jwt.sign(data,jwtSkey)
return res.json({success:true,authToken:authToken,email:email});
}
catch(err){
    console.log(err)
    res.json({success:false})
}
})

module.exports=router;