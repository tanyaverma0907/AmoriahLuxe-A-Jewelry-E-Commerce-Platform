const Stripe = require("stripe");
const Order = require("../models/Order");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);
//
// ✅ @desc    Create Stripe Payment Intent
// ✅ @route   POST /api/payments/create-payment-intent
// ✅ @access  Private
//
const createPaymentIntent = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      res.status(404);
      throw new Error("Order not found");
    }

    if (order.isPaid) {
      res.status(400);
      throw new Error("Order already paid");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.totalPrice * 100), // convert to cents
      currency: "usd",
      metadata: {
        orderId: order._id.toString(),
        userId: order.user.toString(),
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

//
// ✅ @desc    Confirm Payment & Update Order
// ✅ @route   POST /api/payments/confirm
// ✅ @access  Private
//
const confirmPayment = async (req, res) => {
  try {
    const { paymentIntentId, orderId } = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId
    );

    if (paymentIntent.status !== "succeeded") {
      res.status(400);
      throw new Error("Payment not successful");
    }

    const order = await Order.findById(orderId);

    if (!order) {
      res.status(404);
      throw new Error("Order not found");
    }

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: paymentIntent.id,
      status: paymentIntent.status,
      update_time: new Date().toISOString(),
      email_address: paymentIntent.receipt_email || "",
    };

    const updatedOrder = await order.save();

    res.json({
      message: "Payment successful",
      order: updatedOrder,
    });

  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

module.exports = {
  createPaymentIntent,
  confirmPayment,
};