class PointService {
  top10(callback) {
    // Gather a list of all members.
    // If members exist, sort them top to bottom in relation of how much points they have.
    // Else, send out an error message.
    callback();
  }
  addDKP(name, amount, callback) {
    // Check if a member exists with that name.
    // If it does not, send out an error message.
    // Add DKP to the member.
    // As if there's no user, send out an error message.
    callback();
  }
  removeDKP(name, amount, callback) {
    // Check if a member exists with that name.
    // If it does not, send out an error message.
    // Remove DKP to the member.
    // As if there's no user, send out an error message.
    callback();
  }
}

module.exports = new PointService();
