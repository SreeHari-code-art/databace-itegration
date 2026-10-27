const express = require("express");
const connectDB = require("./config/db"); // Adjust path if needed
const userRoutes = require("./routes/users");

const app = express();

// Connect to MongoDB database
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount the user routes
app.use("/api/users", userRoutes);

// Define port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});