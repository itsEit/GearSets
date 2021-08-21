const mongoose = require("mongoose");
const GearSchema = mongoose.Schema({
  _id: Number
});
module.exports = mongoose.model("Gear", GearSchema, "GearData");
