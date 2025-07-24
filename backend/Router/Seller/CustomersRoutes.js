const express = require("express");
const router = express.Router();
const customerController = require("../../Controller/Seller/CustomersController");

router.post("/", customerController.createCustomer);
router.get("/", customerController.getCustomers);
router.get("/summary", customerController.getSummary);
router.get("/:id", customerController.getCustomerById);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
