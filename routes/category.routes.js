const express = require("express");
const router = express.Router();
const controller = require("../controllers/category.controller");

// CRUD routes
router.get("/", controller.getCategories);
router.post("/add", controller.addCategory);

// DELETE
router.get("/delete/:id", controller.deleteCategory);

// EDIT
router.get("/edit/:id", controller.getCategoryById);
router.post("/edit/:id", controller.updateCategory);

module.exports = router;
