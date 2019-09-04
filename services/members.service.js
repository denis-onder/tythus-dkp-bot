class MemberSerice {
  showMembers(callback) {
    // Send out a list of member names.
    callback();
  }
  addMember(name, callback) {
    // Check if a member already exists with that name.
    // If it does not, add a new member.
    // Else, send out an error message.
    callback();
  }
  removeMember(name, callback) {
    // Check if a member already exists with that name.
    // If it does, remove the member.
    // Else, send out an error message.
    callback();
  }
}

module.exports = new MemberSerice();
