const asyncHandler = require('express-async-handler');
const TimesheetWorklogs = require('../../Model/Admin/TimesheetWorklogModel');
const Projects = require("../../Model/Admin/ProjectsModel");
const Jobs = require('../../Model/Admin/JobsModel');
const cloudinary = require('../../Config/cloudinary');
const User = require('../../Model/userModel');
const mongoose = require("mongoose");

cloudinary.config({
  cloud_name: 'dkqcqrrbp',
  api_key: '418838712271323',
  api_secret: 'p12EKWICdyHWx8LcihuWYqIruWQ'
});

// const TimesheetWorklogCreate = asyncHandler(async (req, res) => {

//     const {
//         projectId,
//         jobId,
//         date,
//         startTime,
//         endTime,
//         hours,
//         taskDescription,
//         status,
//         tags
//     } = req.body;

//     try {
//         // Validate project IDs
//         if (!Array.isArray(projectId) || projectId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid Project ID format. Ensure all IDs are valid."
//             });
//         }

//         // Validate jobId array
//         if (!Array.isArray(jobId) || jobId.length === 0 || jobId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid Job ID format. Ensure all IDs are valid."
//             });
//         }

//         // Check if all projects exist
//         const projects = await Projects.find({ '_id': { $in: projectId } });
//         if (projects.length !== projectId.length) {
//             return res.status(404).json({
//                 success: false,
//                 message: "One or more projects not found"
//             });
//         }

//         // Check if job exists (using first jobId only)
//         const job = await Jobs.findById(jobId[0]);
//         if (!job) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Job not found"
//             });
//         }

//         // Create the new TimeLog
//         const newTimesheetWorklog = new TimesheetWorklogs({
//             projectId: projectId,
//             jobId: jobId[0],  
//             date,
//             startTime,
//             endTime,
//             hours,
//             taskDescription,
//             status,
//             tags
//         });

//         await newTimesheetWorklog.save();

//         res.status(201).json({
//             success: true,
//             message: "TimeLog created successfully",
//             TimesheetWorklog: newTimesheetWorklog.toObject(),
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "An error occurred while creating the TimeLog",
//             error: error.message,
//         });
//     }
// });

// Helper: Convert 12-hour format (e.g., "02:30 PM") to 24-hour format (e.g., "14:30")
function convertTo24Hour(timeStr) {
  const [time, modifier] = timeStr.trim().split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  } else if (modifier.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}


const TimesheetWorklogCreate = asyncHandler(async (req, res) => {
  const {
    projectId,
    jobId,
    employeeId,
    date,
    startTime,
    endTime,
    taskDescription,
    status,
    tags
  } = req.body;

  try {
    // Validate project IDs
    if (!Array.isArray(projectId) || projectId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID format. Ensure all IDs are valid."
      });
    }

    // Validate jobId array
    if (!Array.isArray(jobId) || jobId.length === 0 || jobId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
      return res.status(400).json({
        success: false,
        message: "Invalid Job ID format. Ensure all IDs are valid."
      });
    }

        // Validate EmployeeId array
        // ✅ Validate Employee ID array
        if (!Array.isArray(employeeId) || employeeId.length === 0 || employeeId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
          return res.status(400).json({
            success: false,
            message: "Invalid Employee ID format. Ensure all IDs are valid."
          });
        }
    

    // Check if all projects exist
    const projects = await Projects.find({ '_id': { $in: projectId } });
    if (projects.length !== projectId.length) {
      return res.status(404).json({
        success: false,
        message: "One or more projects not found"
      });
    }

    // Check if job exists (using first jobId only)
    const job = await Jobs.findById(jobId[0]);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

     // Validate EmployeeId array
    // ✅ Find employee in User table
    const employeeUser = await User.findOne({ _id: employeeId[0], role: "employee" });
    if (!employeeUser) {
      return res.status(404).json({
        success: false,
        message: "Employee user not found or role is not 'employee'"
      });
    }

    // Convert to 24-hour format
    const start24 = convertTo24Hour(startTime);
    const end24 = convertTo24Hour(endTime);

    // Validate and calculate hours
    const start = new Date(`${date}T${start24}`);
    const end = new Date(`${date}T${end24}`);


    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid startTime or endTime format"
      });
    }

    if (start >= end) {
      return res.status(400).json({
        success: false,
        message: "Start time must be earlier than end time"
      });
    }

   const milliseconds = end - start;
const totalMinutes = Math.floor(milliseconds / (1000 * 60));
const hours = +(totalMinutes / 60).toFixed(2);
const durationReadable = `${Math.floor(totalMinutes / 60)} hours ${totalMinutes % 60} minutes`;


    // Create the new TimeLog
    const newTimesheetWorklog = new TimesheetWorklogs({
      projectId,
      jobId: jobId[0],
       employeeId: employeeUser._id,
      date,
      startTime,
      endTime,
      hours:durationReadable,
      taskDescription,
      status,
      tags
    });

    await newTimesheetWorklog.save();

    res.status(201).json({
      success: true,
      message: "TimeLog created successfully",
      TimesheetWorklog: newTimesheetWorklog.toObject(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the TimeLog",
      error: error.message,
    });
  }
});





//GET SINGLE AllTimesheetWorklog
//METHOD:GET
const AllTimesheetWorklog = async (req, res) => {
  try {
    const allTimesheetWorklogs = await TimesheetWorklogs.find()
      .populate({
        path: 'projectId',
        select: '_id projectName',
        model: 'Projects',
      })
      .populate({
        path: 'jobId',
        select: '_id jobName',
        model: 'Jobs',
      });

    if (!allTimesheetWorklogs || allTimesheetWorklogs.length === 0) {
      return res.status(404).json({ success: false, message: "No TimesheetWorklogs found" });
    }

    const TimesheetWorklogsWithDetails = allTimesheetWorklogs.map(TimesheetWorklog => {
      const TimesheetWorklogObj = TimesheetWorklog.toObject();

      return {
        ...TimesheetWorklogObj,
        projects: Array.isArray(TimesheetWorklog.projectId)
          ? TimesheetWorklog.projectId.map(project => ({
            projectId: project?._id,
            projectName: project?.projectName,
          }))
          : [],
        jobs: Array.isArray(TimesheetWorklog.jobId)
          ? TimesheetWorklog.jobId.map(job => ({
            jobId: job?._id,
            jobName: job?.jobName,
          }))
          : [],
      };
    });

    res.status(200).json({
      success: true,
      TimesheetWorklogs: TimesheetWorklogsWithDetails,
    });

  } catch (error) {
    console.error("Error fetching TimesheetWorklogs:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching TimesheetWorklogs",
      error: error.message,
    });
  }
};




// // //GET SINGLE DeleteProjects
// // //METHOD:DELETE
const deleteTimesheetWorklog = async (req, res) => {
  let deleteTimesheetWorklogID = req.params.id
  if (deleteTimesheetWorklog) {
    const deleteTimesheetWorklog = await TimesheetWorklogs.findByIdAndDelete(deleteTimesheetWorklogID, req.body);
    res.status(200).json("Delete TimesheetWorklog Successfully")
  } else {
    res.status(400).json({ message: "Not Delete project" })
  }
}


// // //GET SINGLE ProjectsUpdate
// // //METHOD:PUT
const UpdateTimesheetWorklog = async (req, res) => {
  try {
    const allowedFields = [
      'projectId',
      'jobId',
      'date',
      'startTime',
      'endTime',
      'hours',
      'taskDescription',
      'status',
      'tags'
    ];
    const updateData = {};
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'At least one field must be provided for update' });
    }
    const updatedDiary = await TimesheetWorklogs.findOneAndUpdate(
      { jobId: req.body.jobId },
      updateData,
      { new: true }
    );
    if (!updatedDiary) {
      return res.status(404).json({ message: 'Diary not found' });
    }
    res.status(200).json(updatedDiary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};




// //METHOD:Single
// //TYPE:PUBLIC
// const SingleTimesheetWorklog = async (req, res) => {
//   try {
//     const SingleTimesheetWorklog = await TimesheetWorklogs.findById(req.params.id);
//     res.status(200).json(SingleTimesheetWorklog)
//   } catch (error) {
//     res.status(404).json({ msg: "Can t Find Diaries" })
//   }
// }


module.exports = { TimesheetWorklogCreate, AllTimesheetWorklog, deleteTimesheetWorklog, UpdateTimesheetWorklog };