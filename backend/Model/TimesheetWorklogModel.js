const mongoose = require("mongoose");

const Projects = require("./ProjectsModel");
const Jobs = require('./JobsModel');
				
const TimesheetWorklogSchema = new mongoose.Schema({
    projectId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        required: true,
    }],
    jobId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jobs',
        required: true
    }],
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime:{
        type: String,
        required: true,
    },
    taskDescription: {
        type: String,
        required: true,
    },

    hours: {
        type:String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        default: 'Pending',
    },
    tags: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('TimesheetWorklog', TimesheetWorklogSchema);

