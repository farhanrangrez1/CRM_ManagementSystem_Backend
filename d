const asyncHandler = require('express-async-handler');
const Jobs = require('../Model/JobsModel');
const Projects = require("../Model/ProjectsModel");
const cloudinary = require('../Config/cloudinary');
const mongoose =require("mongoose")

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
    const project = await Projects.findById(projectsId);
    if (!mongoose.Types.ObjectId.isValid(projectsId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID format"
      });
    }
    
    const newJob = new Jobs({
      projects: projectsId,
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
    jobData.projectId = jobData.projects;
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
      // Fetch all jobs and populate the related project data (_id and projectName)
      const allJobs = await Jobs.find()
        .populate('projects', '_id projectName'); // Populate project fields: _id and projectName
  
      if (!allJobs || allJobs.length === 0) {
        return res.status(404).json({ success: false, message: "No jobs found" });
      }
  
      res.status(200).json({
        success: true,
        jobs: allJobs, // Return all jobs with populated project data
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
    const SingleJob=async(req,res)=>{
      try {
          const SingleJob= await Jobs.findById(req.params.id);
          res.status(200).json(SingleJob)
      } catch (error) {
          res.status(404).json({msg:"Can t Find Diaries"} )
      }
  }


module.exports = {jobCreate,AllJob,deleteJob,UpdateJob,SingleJob};
























const asyncHandler = require('express-async-handler');
const Jobs = require('../Model/JobsModel');
const Projects = require("../Model/ProjectsModel");
const cloudinary = require('../Config/cloudinary');
const mongoose =require("mongoose")

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
    // Check if the Project ID is valid
    if (!mongoose.Types.ObjectId.isValid(projectsId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Project ID format"
      });
    }
    
    // Find the Project to verify it exists
    const project = await Projects.findById(projectsId);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    // Create a new Job with the correct field name projectId
    const newJob = new Jobs({
      projectId: projectsId, // Fixing this to use projectId
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

    // Save the job
    await newJob.save();

    // Format the job data to include projectId instead of projects
    const jobData = newJob.toObject();
    jobData.projectId = jobData.projectId; // Ensure projectId is returned
    delete jobData.projects; // Remove the old field if it exists
    
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
          path: 'projectId', // Use projectId to populate
          select: '_id name', // Include both project ID and name
          model: 'Projects'
        });
  
      if (!allJobs || allJobs.length === 0) {
        return res.status(404).json({ success: false, message: "No jobs found" });
      }
  
      // Modify the response to include projectId and projectName
      const jobsWithProjectDetails = allJobs.map(job => {
        return {
          ...job.toObject(),
          project: {
            projectId: job.projectId._id, // project ID
            projectName: job.projectId.name, // project name
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
    const SingleJob=async(req,res)=>{
      try {
          const SingleJob= await Jobs.findById(req.params.id);
          res.status(200).json(SingleJob)
      } catch (error) {
          res.status(404).json({msg:"Can t Find Diaries"} )
      }
  }


module.exports = {jobCreate,AllJob,deleteJob,UpdateJob,SingleJob};





const mongoose = require("mongoose");

const Projects = require("./ProjectsModel");

const jobsSchema = new mongoose.Schema({
    projectId:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        required: true,
    }],
    brandName: {
        type:String ,
        required: true,
    },
    subBrand: {
        type: String,
        required: true,
    },
    flavour: {
        type: String,
        required: true,
    },
    packType: {
        type: String,
        required: true,
    },
    packSize: {
        type: String,
        required: true,
    },
    priority:{
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    assign: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true
      },
    totalTime: {
        type: String,
        require: true
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Jobs', jobsSchema);


































  const AllJob = async (req, res) => {
    try {
      // Fetch all projects with their _id and projectName
      const allProjects = await Projects.find()
        .select('_id projectName'); // Only select _id and projectName fields
  
      if (!allProjects || allProjects.length === 0) {
        return res.status(404).json({ success: false, message: "No projects found" });
      }
  
      res.status(200).json({
        success: true,
        jobs: allProjects, // Return the projects in the response
      });
  
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching projects",
        error: error.message,
      });
    }
  };
  



  {
    "projectsId": [
      "681c8656d90e15caa3863398", 
      "681c8662d90e15caa386339a"
    ],
    "brandName": "Pepsi",
    "subBrand": "Pepsi Max",
    "flavour": "Cherry",
    "packType": "Can",
    "packSize": "330ml",
    "priority": "Low",
    "Status": "In Progress",
    "assign": "Designer",
    "barcode": "POS-123456",
    "totalTime": "05:30"
  }
  