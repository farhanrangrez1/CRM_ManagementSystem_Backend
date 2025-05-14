const express=require('express');
const { createUser, loginUser, forgotPassword, resetPassword, getAllUsers } = require('../Controller/userController');


const router = express.Router()

router.post('/',createUser)

router.post('/login',loginUser)

router.post('/forgotPassword',forgotPassword)

router.post('/resetPassword',resetPassword)

router.get('/getAllUsers',getAllUsers)
 

module.exports = router 
