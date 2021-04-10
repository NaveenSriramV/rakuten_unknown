const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true,
    },
    NameofCeo: {
      type: String,
      required: true,
    },
    companyCertificate: {
      type: String,
    },
    companyImageName:{
      type: String,
      default:"none"
    },
    FeildOfWork: {
      type: String,
      required: true,
    },
    CompanyWebsite: {
      type: String,
    },
    Linkedin: {
      type: String,
      required: true,
    },
    Contact: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    SlideLink: {
      type: String,
    },
    Country: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    Domain: {
      type: String,
      required: true,
    },
    InvestorContent: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default:1,
    },
    verified: {
      type: Boolean,
    },
    messages: [
      {
        _id: false,
        name: String,
        contact: String,
        message: String,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Startup = mongoose.model("startup", StartupSchema, "startup");
module.exports = Startup;
