const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth");
module.exports = app;

// Cors
app.use(cors());

//json
app.use(express.json());

//Routs
app.use("/api/v1/auth", authRoute);
