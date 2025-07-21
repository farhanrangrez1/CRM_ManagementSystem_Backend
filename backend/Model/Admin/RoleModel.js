const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  role: {
        type: String,
        required: [true, 'Role is required'],
        
    },
}, { timestamps: true });

module.exports = mongoose.model("Role", roleSchema);
