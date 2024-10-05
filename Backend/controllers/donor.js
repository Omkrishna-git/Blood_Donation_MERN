const Donor = require("../models/Donor");

//Create Doner
const createDonor = async (req, res) => {
    try {
        const newDonor = new Donor(req.body); 
        const donor = await newDonor.save();
        res.status(201).json(donor);
    } 
    catch (error) {
        res.status(500).json(error);
    }
};

// Get All Doners

const getAllDonors = async (req, res) => {
    try {
        const donor = await Donor.find().sort({ createdAt: -1 }); 
        res.status(200).json(donor);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Update  Donors

const updateDonor = async (req,res) =>{
    try{
        const updateDonor = await Donor.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )

        res.status(200).json(updateDonor); 
        
    }
    catch(error){
        res.status(500).json(error);
    }
}

// Get one donor
const getOneDonor = async (req,res) =>{
    try {
        const donor = await Donor.findById(req.params.id);
        res.status(200).json(donor);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}

// Delete donor

const deleteDonor = async (req,res) =>{
    try {
        await Donor.findByIdAndDelete(req.params.id);
        res.status(200).json("Donor deleted successfully");

    } catch (error) {
        res.status(500).json(error);
    }
}

// Stastistic

const getDonorStats = async (req,res) =>{
    try {
        const stats = await Donor.aggregate([
            {
                $group:{
                    _id : "$bloodgroup",
                    count:{$sum:1}
                }
            }
        ]);

        res.status(200).json(stats);

    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {deleteDonor,getAllDonors,getDonorStats,getOneDonor,updateDonor,createDonor}

