const express = require("express");
const router = express.Router();
// routing ot the customer api
router.use("/customer", require("./customer"));
// routing ot the order api
router.use("/product", require("./product"));
// routing ot the order api
router.use("/order", require("./order"));
module.exports = router;
