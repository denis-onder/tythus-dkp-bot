const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config");
const MemberService = require("./services/members.service");
const PointService = require("./services/points.service");
const database = require("./db");
const sendList = require("./functions/sendList");

database.connect();

client.on("ready", () => {
  console.log(`Tythus running!\nEnvironment: ${config.environment}`);
  client.user.setActivity(`the Onyxia Wipe Animation`);
});

client.on("message", msg => {
  /* 
    Split the message into a list of arguments which we can use for 
    determining which command and parameters are being requested/provided.
  */
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
    // Delete message
    msg.delete();
    // Reply shorthand
    const reply = m => msg.channel.send("\n```\n" + m + "\n```\n");
    // Cases go here
    switch (args[1]) {
      // The video that made the world a better place.
      case "fuck":
        msg.reply("https://www.youtube.com/watch?v=HtvIYRrgZ04");
        break;
      case "showMembers":
        MemberService.showMembers((err, members) =>
          err ? reply(err) : sendList(members, reply)
        );
        break;
      case "showMember":
        MemberService.showMember(args[2], (err, points) =>
          err ? reply(err) : reply(`${args[2]} - ${points} DKP`)
        );
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
        PointService.addDKP(args[2], args[3], (err, points) =>
          err ? reply(err) : reply(`${args[2]} - Points: ${points} DKP`)
        );
        break;
      case "removeDKP":
        PointService.removeDKP(args[2], args[3], (err, points) =>
          err ? reply(err) : reply(`${args[2]} - Points: ${points} DKP`)
        );
        break;
    }
  }
});

client.login(config.token);
