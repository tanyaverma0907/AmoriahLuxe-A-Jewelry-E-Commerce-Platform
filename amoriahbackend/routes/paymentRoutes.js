//paymentRoutes.js
const express = require("express");
const router = express.Router();

const {
  createPaymentIntent,
  confirmPayment,
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

// Create Payment Intent
router.post("/create-payment-intent", protect, createPaymentIntent);

// Confirm Payment
router.post("/confirm", protect, confirmPayment);

module.exports = router;