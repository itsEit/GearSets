const express = require("express");
const router = express.Router();
const User = require("../models/User");

// get gear by ids
router.get("/id/:userID", async (req, res) => {
  try {
    // const gear = await Gear.findById(req.params.gearId);
    const user = await User.findOne({ userName: req.params.userID });
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "Item not found" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// Create New user
router.post("/", async (get, res) => {
  try {
    const userCheck = await User.findOne({ userName: get.body.userName }).lean();
    const user = new User(get.body);

    if (userCheck) {
      res.json({ message: "User Exists" });
    } else {
      user.save();
    }
    res.json({ message: "User Added" });
  } catch (err) {
    res.json({ message: err });
  }
});

// User Login and get ID
router.post("/login", async (get, res) => {
  try {
    const user = await User.findOne({ userName: get.body.userName, userPass: get.body.userPass });
    if (user) {
      res.json({userName: user.userName, userID: user._id});
    } else {
      res.json({ message: "User not Found" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
