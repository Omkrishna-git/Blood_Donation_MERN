const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
const cron = require('node-cron');
// Added 4 types of mail from mailservices
const { sendDetailsProsepctEmail} = require("./EmailServices/sendDetailsProspect");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder");
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail");

dotenv.config();

//Server
const PORT = process.env.PORT;

// Schedule Task

const run = () =>{
    cron.schedule('* * * * * * *', () => {
        sendDetailsProsepctEmail();
        sendEligibilityEmail();
        sendBloodDonationReminder();
        sendDonorDetailsEmail();
    });
}

run();

app.listen(PORT, () => {
  console.log(`Background Services running on ${PORT}`);
  dbConnection();
});
