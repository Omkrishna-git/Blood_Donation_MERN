const ejs = require("ejs");
const dotenv = require("dotenv");
const Prospect = require("../models/Prospect");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const sendEligibilityEmail = async () => {
    const prospects = await Prospect.find({ status: 0 });
    if (prospects.length > 0) {
        for (let prospect of prospects) {
            // if age less than 18 or weight less than 50
            if (prospect.age < 18 || prospect.weight < 50) {
                ejs.renderFile(
                "templates/BloodDonationEligibility.ejs",
                {   name: prospect.name,
                    age: prospect.age,
                    weight: prospect.weight 
                },

                async (err, data) => {
                    let messageoption = {
                        from: process.env.EMAIL,
                        to: prospect.email,
                        subject: "About Blood Donation Eligibility.",
                        html: data,
                    };

                    try {
                        await sendMail(messageoption);
                        // We are not registering person in the database
                        // Deleting person fron database
                        await Prospect.findByIdAndDelete(prospect._id);
                    } 
                    catch (error) {
                        console.log(error);
                    }
                });
            }
        }
    }
};

module.exports = { sendEligibilityEmail };
