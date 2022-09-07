const Product = require("../../../models/products");
// create a new product in the database using the Product model
module.exports.create = async function (req, res) {
  console.log("req.body", req.body);

  try {
    // create a new product in the database
    let product = await Product.create({
      productCategory: req.body.productCategory,
      productInfo: req.body.productInfo,
      price: req.body.price,
      quantityAvailable: req.body.quantityAvailable,
    });
    // return the product object in the response
    return res.status(200).json({
      message: "product created successfully",
      data: {
        product: product,
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

// update the product price in the database using the Product model
module.exports.updatePrice = async function (req, res) {
  try {
    // find the product in the database using the id from params and update the price of the product
    let product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        price: req.body.price,
      },
      {
        new: true,
      }
    );
    // return the product object in the response after updating the price
    return res.status(200).json({
      message: "product updated successfully",
      data: {
        product: product,
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
