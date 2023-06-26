const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')

const getUserData = async(req, res)=>{
      const {email , password} = req.body
        const user  = await userModel.findOne({email});
        if(user && (await bcrypt.compare(password,user.password))){
          console.log('user Found',user.email );
          res.send('Welcome '+ user.name)
        }else{

          res.status(404).send('wrong email or password')
          console.log('no user Found');
        }
      }
    
module.exports = getUserData