const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
const cron = require('node-cron');

dotenv.config();

//Server
const PORT = process.env.PORT;

// Schedule Task

const run = () =>{
    cron.schedule('* * * * * * *', () => {
        console.log('running every second');
    });
}

run();

app.listen(PORT, () => {
  console.log(`Background Services running on ${PORT}`);
  dbConnection();
});
