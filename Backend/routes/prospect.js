const express = require("express");
const {
  createProspect,
  getAllProspects,
  updateProspect,
  deleteProspect,
  getOneProspect,
} = require("../controllers/prospect");
const router = express.Router();

// Add prospect
router.post("/", createProspect);

// Get all prospect
router.get("/", getAllProspects);

// Update prospect
router.put("/:id", updateProspect);

// Delete Prospect
router.delete("/:id", deleteProspect);

// Get one prospect
router.post("/find/:id", getOneProspect);
