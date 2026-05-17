
//productroutes.js
const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Public routes
router.get("/", getProducts);
router.get("/top", getTopProducts);
router.get("/:id", getProductById);

// Admin routes
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

// Reviews
router.post("/:id/reviews", protect, createProductReview);

module.exports = router;