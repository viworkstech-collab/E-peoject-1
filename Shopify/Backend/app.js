const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "shopify Backend Server is Running" });
});

module.exports = app;

