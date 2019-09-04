const User = require("../db/models/user.model");

class MemberSerice {
  async showMembers(callback) {
    const members = await User.find();
    callback(false, members);
  }
  async addMember(name, callback) {
    // Check if a member already exists with that name.
    const user = await User.findOne({ name });
    // If it does, send out an error message.
    if (user) {
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
    // Check if a member already exists with that name.
    if (user) {
      // If it does, remove the member.
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
