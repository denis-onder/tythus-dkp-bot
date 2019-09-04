const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config");
const MemberService = require("./services/members.service");
const PointService = require("./services/points.service");
const database = require("./db");

database.connect();

client.on("ready", () =>
  console.log(`Tythus running!\nEnvironment: ${config.environment}`)
);

client.on("message", msg => {
  const args = msg.content.split(" ");

  /* 
    NOTE: Argument indexes:
    [0] - Keyword, 
    [1] - Command,
    [2] - Username,
    [3] - Amount(Optional)
  */

  // Check if keyword's correct
  if (args[0] === config.keyword) {
    // Reply shorthand
    const reply = m => msg.reply(m);
    // Cases go here
    switch (args[1]) {
      case "showMembers":
        MemberService.showMembers((err, members) => {
          if (err) {
            reply(err);
            return;
          } else {
            let list = "\n";
            members.map((m, i) => (list += `${i + 1}. ${m.name}\n`));
            reply(list);
          }
        });
        break;
      case "addMember":
        MemberService.addMember(args[2], err =>
          err ? reply(err) : reply(`${args[2]} has been added!`)
        );
        break;
      case "removeMember":
        MemberService.removeMember(args[2], err =>
          err ? reply(err) : reply(`${args[2]} has been removed.`)
        );
        break;
      case "addDKP":
        PointService.addDKP(args[2], args[3], () =>
          reply(`Adding DKP(${args[3]}) to ${args[2]}`)
        );
        break;
      case "removeDKP":
        PointService.removeDKP(args[2], args[3], () =>
          reply(`Removing DKP(${args[3]}) from ${args[2]}`)
        );
        break;
    }
  }
});

client.login(config.token);
