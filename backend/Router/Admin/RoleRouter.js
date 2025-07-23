const express = require('express');
const { RoleCreate, GetPermissionsByRoleId } = require('../../Controller/Admin/RoleController');


const router = express.Router()

router.post('/role', RoleCreate)
router.get("/permissions/:roleId", GetPermissionsByRoleId);

module.exports = router 
