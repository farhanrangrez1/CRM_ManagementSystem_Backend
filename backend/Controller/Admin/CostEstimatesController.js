const asyncHandler = require('express-async-handler');
const CostEstimates = require('../../Model/Admin/CostEstimatesModel');
const Projects = require("../../Model/Admin/ProjectsModel");
const ClientManagement = require("../../Model/Admin/ClientManagementModel");
const cloudinary = require('../../Config/cloudinary');
const { generateEstimateNo } = require('../../middlewares/generateEstimateRef');
const mongoose = require("mongoose");

cloudinary.config({
  cloud_name: 'dkqcqrrbp',
  api_key: '418838712271323',
  api_secret: 'p12EKWICdyHWx8LcihuWYqIruWQ'
});
const costEstimatesCreate = asyncHandler(async (req, res) => {
  const {
    projectsId,
    clientId,
    estimateDate,
    validUntil,
    currency,
    lineItems,
    VATRate,
    Notes,
    POStatus,
    Status
  } = req.body;

  try {
    if (!Array.isArray(projectsId) || projectsId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
      return res.status(400).json({ success: false, message: "Invalid Project ID format." });
    }

    if (!Array.isArray(clientId) || clientId.some(id => !mongoose.Types.ObjectId.isValid(id))) {
      return res.status(400).json({ success: false, message: "Invalid Client ID format." });
    }

    const projects = await Projects.find({ '_id': { $in: projectsId } });
    if (projects.length !== projectsId.length) {
      return res.status(404).json({ success: false, message: "One or more projects not found" });
    }

    const clients = await ClientManagement.find({ '_id': { $in: clientId } });
    if (clients.length !== clientId.length) {
      return res.status(404).json({ success: false, message: "One or more clients not found" });
    }

    const estimateRef = await generateEstimateNo();

    const newCostEstimate = new CostEstimates({
      estimateRef,
      projectId: projectsId,
      clientId, // already an array
      estimateDate,
      validUntil,
      currency,
      lineItems,
      VATRate,
      Notes,
      POStatus,
      Status
    });

    await newCostEstimate.save();

    res.status(201).json({
      success: true,
      message: "Cost Estimate created successfully",
      costEstimate: newCostEstimate,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the Cost Estimate",
      error: error.message,
    });
  }
});



// GET All Cost Estimates with project and client info
const AllCostEstimates = async (req, res) => {
  try {
    const allCostEstimates = await CostEstimates.find()
      .populate({
        path: 'projectId',
        select: '_id projectName',
        model: 'Projects'
      })
      .populate({
        path: 'clientId',
        select: '_id clientName',
        model: 'ClientManagement'
      });

    if (!allCostEstimates || allCostEstimates.length === 0) {
      return res.status(404).json({ success: false, message: "No cost estimates found" });
    }

 const costEstimatesWithDetails = allCostEstimates.map(costEstimate => {
  const costEstimateObj = costEstimate.toObject();

  return {
    ...costEstimateObj,
    projects: Array.isArray(costEstimate.projectId)
      ? costEstimate.projectId.map(project => ({
          projectId: project?._id,
          projectName: project?.projectName
        }))
      : [],
    clients: costEstimate.clientId
      ? [{
          clientId: costEstimate.clientId._id,
          clientName: costEstimate.clientId.clientName
        }]
      : []
  };
});

    res.status(200).json({
      success: true,
      costEstimates: costEstimatesWithDetails,
    });

  } catch (error) {
    console.error("Error fetching cost estimates:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching cost estimates",
      error: error.message,
    });
  }
};



//GET SINGLE DeleteProjects
//METHOD:DELETE
const deleteCostEstimate = async (req, res) => {
  let deleteCostEstimateID = req.params.id
  if (deleteCostEstimateID) {
    const deleteCostEstimate = await CostEstimates.findByIdAndDelete(deleteCostEstimateID, req.body);
    res.status(200).json("Delete Cost Estimate Successfully")
  } else {
    res.status(400).json({ message: "Not Delete Cost Estimate" })
  }
}


//GET SINGLE ProjectsUpdate
//METHOD:PUT
const UpdateCostEstimate = async (req, res) => {
  try {
    const id = req.body.id || req.params.id;
    if (!id) {
      return res.status(400).json({ message: 'Missing Cost Estimate ID' });
    }

    const allowedFields = [
      'projects',
      'estimateDate',
      'validUntil',
      'currency',
      'lineItems',
      'VATRate',
      'Notes'
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

    console.log("Updating ID:", id);
    const updatedCostEstimate = await CostEstimates.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedCostEstimate) {
      return res.status(404).json({ message: 'Cost Estimate not found' });
    }

    res.status(200).json(updatedCostEstimate);
  } catch (error) {
    console.error("Error updating cost estimate:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};


//METHOD:Single
//TYPE:PUBLIC
const SingleCostEstimate = async (req, res) => {
  try {
    const SingleCostEstimate = await CostEstimates.findById(req.params.id);
    res.status(200).json(SingleCostEstimate)
  } catch (error) {
    res.status(404).json({ msg: "Can t Find Cost Estimate" })
  }
}


module.exports = { costEstimatesCreate, AllCostEstimates, deleteCostEstimate, UpdateCostEstimate, SingleCostEstimate }