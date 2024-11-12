const mongoose = require("mongoose");

const bearSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
    unique: true,
  },
  latinName: {
    type: String,
    required: true,
    unique: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Bear', bearSchema);
