const express = require("express");
const router = express.Router();
const path = require("path");

const adminRoutes = require("./adminRoutes");

router.get("/", (req, res) => {
  console.log(adminRoutes.products);
  console.log(adminRoutes.firstName);
  res.render("index", {
    title: "Home",
    productName: "Coca-Cola",
    productPrice: "1.29",
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
