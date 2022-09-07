const Customer = require("../../../models/customer");
// create a new customer in the database and return the customer object in the response
module.exports.create = async function (req, res) {
  console.log("req.body", req.body);
  try {
    // create a new customer in the database
    let customer = await Customer.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    });
    // return the customer object in the response
    return res.status(200).json({
      message: "customer created successfully",
      data: {
        customer: customer,
      },
    });
  } catch (err) {
    // if there is an error in the database, return the error in the response
    console.log("Error", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// return all the customers in the database in the response
module.exports.allCustomers = async function (req, res) {
  try {
    // find all the customers in the database
    let customer = await Customer.find({});
    // return the customer object in the response if found in the database
    return res.status(200).json({
      message: "List of all customers",
      data: {
        customer: customer,
      },
    });
  } catch (err) {
    // if any error occurs in the database, return the error in the response
    console.log("Error", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
