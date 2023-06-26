const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = require('../const')

const updateUserData = async (req ,res)=>{
    const {email, name , password} = req.body
    let dataToBeUpdated = {}
    if(password){
        const hasedUpdatedPassword = await bcrypt.hash(password,SALT_ROUNDS)
        dataToBeUpdated["password"] = hasedUpdatedPassword
    }
    if(name){
        dataToBeUpdated['name'] = name
    }
    const userName = await userModel.findOneAndUpdate({email:email},{$set:dataToBeUpdated, $currentDate: { lastModified: true }}).then((user)=>{
        if(!user){
            res.status(403).send('No user Found')
            console.log('No user Found')
        }
        else{
           res.status(201).send('User Updated')
           console.log('User Updated')
        }
    }).catch((e)=>{
        console.log('error',e);
    })
}

module.exports = updateUserData