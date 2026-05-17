
//productcontroller
const Product = require("../models/Product");
const Review = require("../models/Review");

//
// ✅ GET ALL PRODUCTS
// GET /api/products
//
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ GET SINGLE PRODUCT
// GET /api/products/:id
//
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ CREATE PRODUCT (Admin)
// POST /api/products
//
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title || "Sample Jewelry",
      price: req.body.price || 0,
      description: req.body.description || "Sample description",
      category: req.body.category || "General",
      images: req.body.images || [],
      stock: req.body.stock || 0,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ UPDATE PRODUCT (Admin)
// PUT /api/products/:id
//
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    product.title = req.body.title || product.title;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.category = req.body.category || product.category;
    product.images = req.body.images || product.images;
    product.stock = req.body.stock || product.stock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ DELETE PRODUCT (Admin)
// DELETE /api/products/:id
//
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    await product.deleteOne();
    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ CREATE REVIEW
// POST /api/products/:id/reviews
//
const createProductReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    const review = await Review.create({
      product: product._id,
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    });

    // Recalculate rating
    const reviews = await Review.find({ product: product._id });

    product.numReviews = reviews.length;
    product.rating =
      reviews.reduce((acc, item) => item.rating + acc, 0) /
      reviews.length;

    await product.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ GET TOP PRODUCTS
// GET /api/products/top
//
const getTopProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ rating: -1 })
      .limit(4);

    res.json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};