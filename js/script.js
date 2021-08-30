const Discord = require("discord.js");
const config = require("../json/config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on("ready", () => console.log("Bot is online!"));

client.on("messageCreate", message => {
	  
  console.log(message.content);
  
  if (!message.content.startsWith(config.prefix)) return;
	
  const args = message.content.substring(config.prefix.length).split(/ +/);

  switch (args[0]) {
    case "hello":

      message.reply("Hello");
      break;

    case "say":
      message.reply(args.slice(1).join(" "));
      break;
  }
});

client.login(config.token);
