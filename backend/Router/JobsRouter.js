const express=require('express');
const { jobCreate, AllJob, deleteJob, UpdateJob, SingleJob } = require('../Controller/JobsController');


const router = express.Router()

router.post('/',jobCreate)

router.get('/',AllJob)

router.delete('/:id',deleteJob)

router.patch('/:id',UpdateJob)

router.get('/:id',SingleJob)

 module.exports = router 
