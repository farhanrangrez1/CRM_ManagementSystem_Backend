const express=require('express');
const { TimeLogsCreate, AllTimeLogs, UpdateTimeLogs, deleteTimeLogs } = require('../Controller/TimeLogsController');


const router = express.Router()

router.post('/',TimeLogsCreate)

router.get('/',AllTimeLogs)

router.delete('/:id',deleteTimeLogs)

router.patch('/:id',UpdateTimeLogs)

// router.get('/:id',SingleJob)

// router.put('/',UpdateJobAssign)


 module.exports = router 
