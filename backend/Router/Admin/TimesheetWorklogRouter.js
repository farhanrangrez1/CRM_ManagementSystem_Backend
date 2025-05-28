const express=require('express');
const { TimesheetWorklogCreate, AllTimesheetWorklog, deleteTimesheetWorklog, UpdateTimesheetWorklog } = require('../../Controller/Admin/TimesheetWorklogController');


const router = express.Router()

router.post('/',TimesheetWorklogCreate)

router.get('/',AllTimesheetWorklog)

router.delete('/:id',deleteTimesheetWorklog)

router.patch('/:id',UpdateTimesheetWorklog)



 module.exports = router 
