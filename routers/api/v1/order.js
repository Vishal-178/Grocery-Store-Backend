const express = require("express");
const router = express.Router();
const orderApi = require("../../../controllers/api/v1/order_api");
// Api to fetch customer Details with maximum Orders in an year
router.get("/data", orderApi.CustomerWithMaxOrder);
// Api to fetch specific Customer Orders list
router.get("/:id", orderApi.orderList);

module.exports = router;
