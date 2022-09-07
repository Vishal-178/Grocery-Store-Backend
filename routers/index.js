const express = require("express");
const router = express.Router();
// routeing to the the API
router.use("/api", require("./api"));

module.exports = router;
