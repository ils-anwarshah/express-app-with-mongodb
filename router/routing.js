const router = require('express').Router()
const getUserData = require('../controller/getUserData')
const postUserData = require('../controller/postUserData')
const deleteUserData  = require('../controller/deleteUserData')
const updateUserData = require('../controller/updateUserData')

const postData = router.post('/postdata', postUserData)

const getdata = router.post('/getdata', getUserData)

const deleteData = router.delete('/deleteData', deleteUserData)

const updateData = router.put('/updateData', updateUserData)

const home = router.get('/',(req,res)=>{
    res.send('Home PAge')
    // console.log('hello');
})

module.exports = {postData, getdata, deleteData,updateData, home}
