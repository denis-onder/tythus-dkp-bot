const User = require("../db/models/user.model");

class MemberSerice {
  async showMembers(callback) {
    const members = await User.find();
    callback(false, members);
  }
  async showMember(name, callback) {
    const user = await User.findOne({ name });
    // Check if a user already exists with that name.
    if (!user) {
      // If the user does not exist, send out an error message.
      const errorMsg = `${name} does not exist within the database`;
      callback(errorMsg, null);
      throw new Error(errorMsg);
    }
    // Else, send out the points.
    callback(false, user.points);
  }
  async addMember(name, callback) {
    const user = await User.findOne({ name });
    // Check if a user already exists with that name.
    if (user) {
      // If the user does exist, send out an error message.
      const errorMsg = `${name} already exists within the database`;
      callback(errorMsg, null);
      throw new Error(errorMsg);
    }
    // Else, register a new user.
    await new User({
      name
    }).save();
    callback(false, null);
  }
  async removeMember(name, callback) {
    const user = await User.findOne({ name });
    // Check if a user already exists with that name.
    if (user) {
      // If the user does exist, remove the user.
      await user.remove();
      callback(false, null);
    }
    // Else, send out an error message.
    const errorMsg = `${name} does not exist within the database`;
    callback(errorMsg, null);
    throw new Error(errorMsg);
  }
}

module.exports = new MemberSerice();
