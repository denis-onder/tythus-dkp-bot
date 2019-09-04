const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config");

client.on("ready", () =>
  console.log(`Tythus running!\nEnvironment: ${config.environment}`)
);

client.on("message", msg => {
  const args = msg.content.split(" "); // [0] - Keyword, [1] - Command, [2] - Username, [3] - Amount(Optional)
  // Check if keyword's correct
  if (args[0] === config.keyword) {
    // Cases go here
    switch (args[1]) {
      case "add_user":
        msg.reply("Adding user");
        break;
      case "remove_user":
        msg.reply("Removing user");
        break;
      case "add_dkp":
        msg.reply("Adding DKP");
        break;
      case "remove_dkp":
        msg.reply("Removing DKP");
        break;
    }
  }
});

client.login(config.token);
