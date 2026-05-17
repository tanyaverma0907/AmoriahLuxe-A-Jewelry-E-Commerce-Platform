const User = require("../models/User");
const Product = require("../models/Product");

//
// ✅ Get all users (Admin)
// GET /api/users
//
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ✅ Get user by ID (Admin)
// GET /api/users/:id
//
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ✅ Update user (Admin)
// PUT /api/users/:id
//
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.isAdmin !== undefined) {
      user.isAdmin = req.body.isAdmin;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ✅ Delete user (Admin)
// DELETE /api/users/:id
//
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.json({ message: "User removed successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ❤️ Add product to wishlist
// POST /api/users/wishlist/:productId
//
const addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const product = await Product.findById(req.params.productId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const alreadyExists = user.wishlist.includes(product._id);

    if (alreadyExists) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    user.wishlist.push(product._id);
    await user.save();

    res.json({ message: "Product added to wishlist" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ❤️ Remove product from wishlist
// DELETE /api/users/wishlist/:productId
//
const removeFromWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.wishlist = user.wishlist.filter(
      (id) => id.toString() !== req.params.productId
    );

    await user.save();

    res.json({ message: "Product removed from wishlist" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//
// ❤️ Get user wishlist
// GET /api/users/wishlist
//
const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "wishlist",
      "title price images rating"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.wishlist);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  addToWishlist,
  removeFromWishlist,
  getWishlist,
};