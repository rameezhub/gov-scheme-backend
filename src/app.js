const express = require("express");
const app = express();

app.use(express.json());

// Routes
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const schemeRoutes = require("./routes/scheme.routes");
const adminRoutes = require("./routes/admin.routes");

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
