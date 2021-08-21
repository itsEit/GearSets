const express = require("express");
const router = express.Router();
const Gear = require("../models/Gear");

// Get List of Gear based on their ids
router.get("/", async (get, res) => {
  try {
    const gear = await Gear.find({
      _id: { $in: get.body },
    });
    res.json(gear);
  } catch (err) {
    if (get.body.length()===0) {
      res.json({ message: "List of Ids required" });
    } else {
      res.json({ message: err });
    }
  }
});

// Get list of gear based if they have a specific stat
router.get("/stat", async (get, res) => {
  try {
    const gear = await Gear.find({
      _id: { $in: get.body },
    });
    res.json(gear);
  } catch (err) {
    if (get.body) {
      res.json({ message: "List of Ids required" });
    } else {
      res.json({ message: err });
    }
  }
});

// get gear by ids
router.get("/id/:gearId", async (req, res) => {
  try {
    const gear = await Gear.findById(req.params.gearId);
    if (gear) {
      res.json(gear);
    } else {
      res.json({ message: "Item not found" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
