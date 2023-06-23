const mongoose = require('mongoose')
const userModel = require('../model/userModel')

const postUserData = async(req, res)=>{
    // console.log(req.body)
    try{

        const newUser = await new userModel({
            name:req.body.name,
            email:req.body.email,
            password: req.body.password
    
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
    }
    catch(e){
        console.log('error',e)
    }
    // res.send('Hello From Express')
}

module.exports= postUserData