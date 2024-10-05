const Prospect = require("../models/Prospect");

// Create Prospect

const createProspect = async (req, res) => {
    try {
        const newProspect = Prospect(req.body);
        const prospect = await newProspect.save();
        res.status(201).json(prospect);
    } 
    catch (error) {
        res.status(500).json(error);
    }
};

// Get all Prospect

const getAllProspects = async (req, res) => {
    try {
        const prospects = await Prospect.find().sort({ createdAt: -1 });
        res.status(200).json(prospects);
    } 
    catch (error) {
        res.status(500).json(error);
    }
};

// Update Prospect

const updateProspect = async (req, res) => {
    try {
        const updateProspect = await Prospect.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
        );

    res.status(201).json(updateProspect);

    } 
    catch (error) {
        res.status(500).json(error);
    }
};

// Get one Prospect
const getOneProspect = async (req, res) => {
    try {
        const prospect = await Prospect.findById(req.params.id);
        res.status(200).json(prospect);
    } 
    catch (error) {
        res.status(500).json(error);
    }
};

// Delete Prospect

const deleteProspect = async (req, res) => {
    try {
        await Prospect.findByIdAndDelete(req.params.id);
        res.status(201).json("Donor deleted successfully");
    } 
    catch (error) {
        res.status(500).json(error);
    }
};

module.exports = 
{
  deleteProspect,
  getOneProspect,
  getAllProspects,
  updateProspect,
  createProspect,
};