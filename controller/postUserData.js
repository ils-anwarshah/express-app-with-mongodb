const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const joiSchema = require('../validator/userValidator')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../const')


const postUserData = async(req, res)=>{
    // console.log(req.body)
    try{
      const validator = joiSchema.validateAsync(req.body).then(async(result)=>{
        //  console.log(result)
        const hashedPassword =await bcrypt.hash(result.password, SALT_ROUNDS)
        const newUser = await new userModel({
            name:result.name,
            email:result.email,
            password: hashedPassword
    
        })
        newUser.save()
        .then((result) => {
        res.send('user created')
          console.log('User created:', result);
        })
        .catch((error) => {
          res.status(401).send('bad Request')
          console.error('Error creating user:', error);
        });
      })
      .catch((e)=>{
        res.status(403).send('Please enter Valid email or Password')
        console.log(e.message);
      })
      // console.log('res',validator);
    }
    catch(e){
        console.log('error',e)
    }
    // res.send('Hello From Express')
}

module.exports= postUserData