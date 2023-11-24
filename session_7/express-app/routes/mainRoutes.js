const express = require("express");
const router = express.Router();
const path = require("path");

const mainController = require("../controllers/mainController")


router.get("/", mainController.getHomeView);

router.get("/product-details/:id",mainController.getProductDetails)

router.get("/about", mainController.getAboutView);

module.exports = router;
