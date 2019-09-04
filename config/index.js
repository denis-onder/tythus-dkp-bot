require("dotenv").config();

module.exports = {
  keyword: "tythus",
  token: process.env.TOKEN || "",
  environment: process.env.NODE_ENV || "development"
};
