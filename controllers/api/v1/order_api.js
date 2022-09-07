const Customer = require("../../../models/customer");
const Order = require("../../../models/orders");
const Product = require("../../../models/products");

// order list of a customer by id of customer
module.exports.orderList = async function (req, res) {
  try {
    // find customer by id param
    let customer = await Customer.findById(req.params.id);
    // if customer found
    if (customer) {
      // find order by id of customer orders, order id is stored in customer orders
      let order = await Order.findById(customer.orders);
      // if order found
      if (order) {
        // if order found, find product by id of all order productList, product id is stored in order productList
        let orderList = await Product.find({ _id: { $in: order.productList } });
        // if orderList found
        if (orderList) {
          // return orderList in the response
          return res.status(200).json({
            message: "List of all orders",
            data: {
              customer: customer,
              allOrder: orderList,
            },
          });
        } else {
          // if orderList not found
          return res.status(404).json({
            message: "error while find each order list from product model",
          });
        }
      } else {
        // if order not found
        return res.status(404).json({
          message: "customer found but order not found",
        });
      }
    } else {
      // if customer not found
      return res.status(404).json({
        message: "Customer not found with this id please change user id",
      });
    }
  } catch (err) {
    // if any error occurs in the database, return the error in the response
    console.log("Error", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


// Api to fetch customer Details with maximum Orders in an year
module.exports.CustomerWithMaxOrder = async function (req, res) {
  try {
    // date object to get current year
    let date = new Date();
    // order list of all order within one year from today.
    let order = await Order.find({
      createdAt: {
        $gte: new Date(date.setFullYear(date.getFullYear() - 1)),
        $lt: new Date(),
      },
    });
    // if order found
    if (order) {
      console.log("order", order);
      // return the customer id with largest productList in order.
      let largestProductListId = order.reduce((a, b) =>
        a.productList.length > b.productList.length ? a : b
      )._id;
      // find customer by id returned from above query which is largest productList in order within one year.
      let largestOrderCustomer = await Customer.findOne({
        orders: largestProductListId,
      });
      // if customer found
      if (largestOrderCustomer) {
        // return customer in the response
        return res.status(200).json({
          message: "Customer with maximum order in one year",
          data: {
            customer: largestOrderCustomer,
          },
        });
      } else {
        // if customer not found
        return res.status(404).json({
          message:
            "order found but customer not found some error in data because order is present but customer is not present",
        });
      }
    } else {
      // if order not found
      return res.status(404).json({
        message: "No Order Found",
      });
    }
  } catch (err) {
    // if any error occurs in the database, return the error in the response
    console.log("Error", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
