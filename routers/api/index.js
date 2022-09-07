const express = require("express");
const router = express.Router();
// routeing to the version of the api
// current API version is v1
router.use("/v1", require("./v1"));
module.exports = router;
