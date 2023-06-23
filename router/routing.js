const router = require('express').Router()
const getUserData = require('../api/getUserData')
const postUserData = require('../api/postUserData')

const postData = router.post('/postdata', postUserData)

const getdata = router.post('/getdata', getUserData)

module.exports = {postData, getdata}
