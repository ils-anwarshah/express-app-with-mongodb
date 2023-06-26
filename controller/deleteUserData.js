const mongoose = require('mongoose')
const userModel = require('../model/userModel')

const deleteUserData = async (req ,res)=>{
    const userName = await userModel.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            res.status(403).send('No user Found')
            console.log('No user Found')
        }
        else{
            const name  = userModel.deleteOne({email:{$eq:req.body.email}}).then((result)=>{
                if(!result){
                    res.status(403).send('forbidden')
                    console.log('Nothing Deleted')
                }
                else{
                    res.status(200).send('User Deleted')
                    console.log('User deleted')
                }
            })
        }
    }).catch((e)=>{
        console.log('error',e);
    })
}

module.exports = deleteUserData

