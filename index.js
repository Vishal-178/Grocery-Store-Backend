const express = require("express");
const db = require("./config/mongoose");
const bodyParser = require("body-parser");
let app = express();
const port = 8000;

// body-parser middleware to parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use express router to route the request
app.use("/", require("./routers/index"));
// create a server and listen on port 8000
app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log(`server started at port: ${port}`);
});
