const mongoose = require("mongoose");

const jobsSelectSchema = new mongoose.Schema(
  {
    // सभी नाम lowercase, required हटा कर default: [] जोड़ दिया
    brandName: [ { type: String, default: [] } ],      // 🔄 change
    subBrand:  [ { type: String, default: [] } ],      // 🔄 change
    flavour:   [ { type: String, default: [] } ],      // 🔄 change
    packType:  [ { type: String, default: [] } ],      // 🔄 change
    packCode:  [ { type: String, default: [] } ],      // 🔄 change
    priority:  [ { type: String, default: [] } ],      // 🔄 change
    status:    [ { type: String, default: [] } ],      // 🔄 change (पहले Status था)
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobsSelect", jobsSelectSchema);
