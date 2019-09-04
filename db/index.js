const config = require("../config/");
const mongoose = require("mongoose");

module.exports = {
  connect: () =>
    mongoose.connect(
      config.database.connectionURI !== undefined
        ? config.database.connectionURI
        : `mongodb://localhost:${config.database.port}/${config.database.name}`,
      { useNewUrlParser: true },
      err => {
        if (err) {
          console.error("Database connection failed!\n", err);
          process.exit(1);
        } else {
          console.log("Database connection established!");
        }
      }
    )
};
