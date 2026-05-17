
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const app = express();

// /* =====================
//    MIDDLEWARES
// ===================== */

// // Allow frontend (mobile + desktop)
// app.use(
//   cors({
//     origin: "*", // for development
//     credentials: true,
//   })
// );

// // Parse JSON bodies
// app.use(express.json());

// // Connect MongoDB
// connectDB();

// /* =====================
//    ROUTES
// ===================== */

// // Product routes
// app.use("/api/products", require("./routes/productRoutes"));

// // Health check
// app.get("/", (req, res) => {
//   res.send("Bliss Backend is Running 💖");
// });

// /* =====================
//    SERVER START
// ===================== */

// const PORT = process.env.PORT || 5000;

// // IMPORTANT → 0.0.0.0 allows phone access
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

// Security
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));

// Root
app.get("/", (req, res) => {
  res.json({ message: "Bliss By Tanya API Running 🚀" });
});

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🔥 Server running on port ${PORT}`)
);
