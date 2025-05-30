const CostEstimates = require('../Model/Admin/CostEstimatesModel'); // Path ko adjust karein agar model ka path alag hai

const generateEstimateRef = async () => {
  const currentYear = new Date().getFullYear();

  // Find last estimate of this year
  const lastEstimate = await CostEstimates
    .findOne({ estimateRef: { $regex: `^EST-${currentYear}-` } })
    .sort({ createdAt: -1 });

  let lastNumber = 0;

  if (lastEstimate && lastEstimate.estimateRef) {
    const parts = lastEstimate.estimateRef.split("-");
    lastNumber = parseInt(parts[2], 10);
  }

  const newNumber = (lastNumber + 1).toString().padStart(3, '0');

  return `EST-${currentYear}-${newNumber}`;
};

module.exports = generateEstimateRef;
