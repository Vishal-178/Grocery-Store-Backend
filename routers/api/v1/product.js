const express = require("express");
const router = express.Router();
const productApi = require("../../../controllers/api/v1/product_api");

// Api to create new Product
router.post("/", productApi.create);
// API to update Product Price
router.post("/:id", productApi.updatePrice);
module.exports = router;
