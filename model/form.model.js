const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  ProfilePicture:{
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("FormData", formSchema);