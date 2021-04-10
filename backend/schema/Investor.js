const mongoose = require("mongoose");

const InvestorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Investor = mongoose.model("investor", InvestorSchema, "investor");
module.exports = Investor;
