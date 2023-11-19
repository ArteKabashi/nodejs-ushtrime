const express = require("express");
const router = express.Router();
const path = require("path");

const adminRoutes = require("./adminRoutes");

router.get("/", (req, res) => {
  const products = adminRoutes.products;
  console.log(products);
  console.log(adminRoutes.firstName);
  res.render("index", {
    title: "Home",
    products: products,
  });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

module.exports = router;
