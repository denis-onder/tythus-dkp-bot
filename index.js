const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config");
const MemberService = require("./services/members.service");
const PointService = require("./services/points.service");

client.on("ready", () =>
  console.log(`Tythus running!\nEnvironment: ${config.environment}`)
);

client.on("message", msg => {
  const args = msg.content.split(" ");
  // [0] - Keyword, [1] - Command, [2] - Username, [3] - Amount(Optional)
  // Check if keyword's correct
  if (args[0] === config.keyword) {
    // Cases go here
    switch (args[1]) {
      case "addUser":
        MemberService.addMember(args[2], msg.reply(`Adding User: ${args[2]}`));
        break;
      case "removeUser":
        MemberService.removeMember(
          args[2],
          msg.reply(`Removing ${args[2]} from`)
        );
        break;
      case "addDKP":
        PointService.addDKP(args[2], args[3], () =>
          msg.reply(`Adding DKP(${args[3]}) to ${args[2]}`)
        );
        break;
      case "removeDKP":
        PointService.removeDKP(
          args[2],
          args[3],
          msg.reply(`Removing DKP(${args[3]}) from ${args[2]}`)
        );
        break;
    }
  }
});

client.login(config.token);
