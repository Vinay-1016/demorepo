const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  carrier: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
});
const Mobile = mongoose.model("Mobile", mobileSchema);

module.exports = Mobile;
