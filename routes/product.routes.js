const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

// Product CRUD
router.get("/", controller.getProducts);

router.get("/add", controller.getAddProduct);
router.post("/add", controller.addProduct);

router.get("/edit/:id", controller.getProductById);
router.post("/edit/:id", controller.updateProduct);

router.get("/delete/:id", controller.deleteProduct);

module.exports = router;
