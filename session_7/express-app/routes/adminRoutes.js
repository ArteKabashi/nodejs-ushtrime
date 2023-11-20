const express = require("express");
const router = express.Router();

const path = require("path");
const adminControllers = require("../controllers/adminController")

router.get("/",adminControllers.getAdminView);

router.get("/add-product", adminControllers.addProductView);

router.post("/product",adminControllers.createProduct);

exports.routes = router;
