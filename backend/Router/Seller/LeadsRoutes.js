const express = require("express");
const router = express.Router();
const leadController = require("../../Controller/Seller/LeadsController");

router.get("/", leadController.getLeads);
router.post("/", leadController.createLead);
router.get("/:id", leadController.getLeadById);
router.put("/:id", leadController.updateLead);
router.delete("/:id", leadController.deleteLead);

module.exports = router;
