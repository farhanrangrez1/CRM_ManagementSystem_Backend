const express=require('express');
const { RoleCreate } = require('../../Controller/Admin/RoleController');


const router = express.Router()

router.post('/role',RoleCreate)

 module.exports = router 
