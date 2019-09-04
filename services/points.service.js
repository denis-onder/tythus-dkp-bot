const User = require("../db/models/user.model");

class PointService {
  top10(callback) {
    // Gather a list of all members.
    // If members exist, sort them top to bottom in relation of how much points they have.
    // Else, send out an error message.
    callback();
  }
  async addDKP(name, amount, callback) {
    const user = await User.findOne({ name });
    // Check if an user exists with that name.
    if (!user) {
      // If it does not, send out an error message.
      const errorMsg = `${name} does not exist within the database`;
      callback(errorMsg, null);
      throw new Error(errorMsg);
    }
    // Add DKP to the member.
    user.points += amount;
    await user.save();
    callback(false, user.points);
  }
  async removeDKP(name, amount, callback) {
    const user = await User.findOne({ name });
    // Check if an user exists with that name.
    if (!user) {
      // If it does not, send out an error message.
      const errorMsg = `${name} does not exist within the database`;
      callback(errorMsg, null);
      throw new Error(errorMsg);
    }
    // Remove DKP to the member.
    user.points -= amount;
    await user.save();
    callback(false, user.points);
  }
}

module.exports = new PointService();
