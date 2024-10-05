const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth");
const donorRoute = require("./routes/donor")
const prospectRoute = require("./routes/prospect")
module.exports = app;

// Cors
app.use(cors());

//json
app.use(express.json());

//Routs
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/donors",donorRoute);
app.use("/api/v1/prospects",prospectRoute);