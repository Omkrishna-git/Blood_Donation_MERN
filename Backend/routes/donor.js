const express = require("express");
const {
  createDonor,
  getAllDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorStats,
} = require("../controllers/donor");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const router = express.Router();

//Add Donor
router.post("/", verifyTokenAndAuthorization, createDonor);

//Get All Donors
router.get("/", getAllDonors);

//Update Donor
router.put("/:id", updateDonor);

//Get one donor
router.get("/find/:id", getOneDonor);

//Delete Donor
router.delete("/:id", deleteDonor);

// Donor Stastistic
router.get("/stats", getDonorStats);
