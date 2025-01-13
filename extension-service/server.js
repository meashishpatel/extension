const express = require("express");
const cors = require("cors"); // Import cors middleware
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const extensionRoutes = require("./routes/extensions");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/extensions", extensionRoutes);

// Start Server
app.listen(PORT, () =>
  console.log(`Extension service running on port ${PORT}`)
);
