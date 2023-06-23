const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const getUserData = async(req, res)=>{
    const userEmail = await userModel.findOne({email:req.body.email}).then((user)=>{
      if(!user){
        res.status(404).send('wrong email or password')
        console.log(user, 'not Found');
      }
      else{
        const userPass = userModel.findOne({password:req.body.password}).then((user)=>{
          if(!user){
            res.status(404).send('wrong email or password')
            console.log(user, 'not Found');
          }else{
            console.log('user Found',user.email );
            res.send('Welcome '+ user.name)
          }
  
        })
      }
    })
    .catch((e)=>{
      console.log('Error', e)
    })
   
    }

    module.exports = getUserData