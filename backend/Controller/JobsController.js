const asyncHandler = require('express-async-handler');
const Jobs = require('../Model/JobsModel');
const Projects = require("../Model/ProjectsModel");
const cloudinary = require('../Config/cloudinary');
const mongoose = require("mongoose")

cloudinary.config({
  cloud_name: 'dkqcqrrbp',
  api_key: '418838712271323',
  api_secret: 'p12EKWICdyHWx8LcihuWYqIruWQ'
});
const jobCreate = asyncHandler(async (req, res) => {
  const {
    projectsId,
    brandName,
    subBrand,
    flavour,
    packType,
    packSize,
    priority,
    Status,
    assign,
    totalTime,
    barcode
  } = req.body;

  try {

    if (!mongoose.Types.ObjectId.isValid(projectsId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID format"
      });
    }

    const project = await Projects.findById(projectsId);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    const newJob = new Jobs({
      projectId: projectsId,
      brandName,
      subBrand,
      flavour,
      packType,
      packSize,
      priority,
      Status,
      assign,
      totalTime,
      barcode
    });
    await newJob.save();
    const jobData = newJob.toObject();
    jobData.projectId = jobData.projectId;
    delete jobData.projects;

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job: jobData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the Job",
      error: error.message,
    });
  }
});

//GET SINGLE AllProjects
//METHOD:GET
const AllJob = async (req, res) => {
  try {
    const allJobs = await Jobs.find()
      .populate({
        path: 'projectId',
        select: '_id projectName',
        model: 'Projects'
      });

    if (!allJobs || allJobs.length === 0) {
      return res.status(404).json({ success: false, message: "No jobs found" });
    }

    const jobsWithProjectDetails = allJobs.map(job => {
      return {
        ...job.toObject(),
        project: {
          projectId: job.projectId._id,
          projectName: job.projectId.projectName, // Use the correct field name
        }
      };
    });

    res.status(200).json({
      success: true,
      jobs: jobsWithProjectDetails,
    });

  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching jobs",
      error: error.message,
    });
  }
};


//GET SINGLE DeleteProjects
//METHOD:DELETE
const deleteJob = async (req, res) => {
  let deleteJobID = req.params.id
  if (deleteJob) {
    const deleteJob = await Jobs.findByIdAndDelete(deleteJobID, req.body);
    res.status(200).json("Delete Job Successfully")
  } else {
    res.status(400).json({ message: "Not Delete project" })
  }
}


//GET SINGLE ProjectsUpdate
//METHOD:PUT
const UpdateJob = async (req, res) => {
  try {
    const allowedFields = [
      'projects',  // Project ID
      'projectName',
      'brandName',
      'subBrand',
      'flavour',
      'packType',
      'packSize',
      'priority',
      'Status',
      'assign',
      'totalTime',
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
    const updatedDiary = await Jobs.findByIdAndUpdate(
      req.params.id,
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



//METHOD:Single
//TYPE:PUBLIC
const SingleJob = async (req, res) => {
  try {
    const SingleJob = await Jobs.findById(req.params.id);
    res.status(200).json(SingleJob)
  } catch (error) {
    res.status(404).json({ msg: "Can t Find Diaries" })
  }
}


module.exports = { jobCreate, AllJob, deleteJob, UpdateJob, SingleJob };