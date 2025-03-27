const app = require("./app");
const connectDatabase = require("./db/Database");
const dotenv = require("dotenv");

// Handle uncaught exceptions (e.g., undefined variables, missing imports)
process.on("uncaughtException", (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    console.error(err.stack);
    console.log("Shutting down the server due to an uncaught exception.");
    process.exit(1);
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/.env" });
}

// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections (e.g., database connection failures)
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.error(err.stack);
    console.log("Shutting down the server due to an unhandled promise rejection.");
    server.close(() => {
        process.exit(1);
    });
});
