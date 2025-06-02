const asyncHandler = require('express-async-handler');
const Assignment = require("../../Model/Admin/AssignmentJobControllerModel");
const Jobs = require('../../Model/Admin/JobsModel');
const User = require('../../Model/userModel');
const mongoose = require("mongoose");

const AssignmentCreate = asyncHandler(async (req, res) => {
    const {
        employeeId,     // array of ObjectIds
        jobId,          // array of ObjectIds
        selectDesigner, // missing earlier - required
        description
    } = req.body;

    // Validate jobId
    if (!Array.isArray(jobId) || jobId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
        return res.status(400).json({
            success: false,
            message: "Invalid job ID format. Ensure all IDs are valid."
        });
    }

    // Validate employeeId
    if (!Array.isArray(employeeId) || employeeId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
        return res.status(400).json({
            success: false,
            message: "Invalid employee ID format. Ensure all IDs are valid."
        });
    }

    // Check if all job IDs exist
    const jobs = await Jobs.find({ _id: { $in: jobId } });
    if (jobs.length !== jobId.length) {
        return res.status(404).json({
            success: false,
            message: "One or more jobs not found"
        });
    }

    // Check if all employee IDs exist
    const users = await User.find({ _id: { $in: employeeId } });
    if (users.length !== employeeId.length) {
        return res.status(404).json({
            success: false,
            message: "One or more employees not found"
        });
    }

    // ✅ Create the new assignment including selectDesigner
    const newAssignment = new Assignment({
        employeeId,
        jobId,
        selectDesigner,
        description,
    });

    await newAssignment.save();

    res.status(201).json({
        success: true,
        message: "Assignment created successfully",
        assignment: newAssignment,
    });
});



//GET SINGLE ProjectsUpdate
//METHOD:PUT
// GET /api/assignments/by-employee/:employeeId

const AllAssignJob = asyncHandler(async (req, res) => {
    const { employeeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
        return res.status(400).json({ message: 'Invalid employee ID' });
    }

    const assignments = await Assignment.find({ employeeId: employeeId })
        .populate('employeeId')   // get employee details
        .populate('jobId');       // get job details

    if (!assignments || assignments.length === 0) {
        return res.status(404).json({ message: 'No assignments found for this employee' });
    }

    res.status(200).json({
        success: true,
        count: assignments.length,
        assignments,
    });
});



module.exports = { AssignmentCreate, AllAssignJob };
