//authroutes.js
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Admin
router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;