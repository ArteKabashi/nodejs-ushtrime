const express = require("express");
const router = express.Router();

const path = require("path");

const products = [];

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/product", (req, res) => {
  products.push(req.body.product);
  res.redirect("/admin/add-product");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
