const express = require("express");
const app = express(); 
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Corrected import paths (matching the folder structure)
const product = require("./controller/product");
const order = require("./controller/order"); // FIXED: Changed 'orders' to 'order'
const user = require("./controller/user");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env", // Ensure the correct path
    });
}

// Serve static files for uploads and products
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));

// Import and use routes
app.use("/api/v2/user", user);
app.use("/api/v2/product", product);
app.use("/api/v2/order", order); // FIXED: Changed '/orders' to '/order'

app.use(ErrorHandler);

module.exports = app;
