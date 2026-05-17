const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} = require("../controllers/userController");

const { protect, admin } = require("../middleware/authMiddleware");

//
// ❤️ Wishlist routes (Private)
//
router.get("/wishlist", protect, getWishlist);
router.post("/wishlist/:productId", protect, addToWishlist);
router.delete("/wishlist/:productId", protect, removeFromWishlist);

//
// 👑 Admin routes
//
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUserById);
router.put("/:id", protect, admin, updateUser);
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;