require("dotenv").config();

module.exports = {
  keyword: "tythus",
  token: process.env.TOKEN,
  environment: process.env.NODE_ENV || "development",
  database: {
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
  }
};
