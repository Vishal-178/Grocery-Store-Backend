const express = require("express");
const router = express.Router();
const customerApi = require("../../../controllers/api/v1/customer_api");
// Api to create new Customer
router.post("/", customerApi.create);
// Api to fetch Customers list
router.get("/all", customerApi.allCustomers);
module.exports = router;
