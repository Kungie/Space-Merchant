const Discord = require("discord.js");
const fs = require("fs");
const chalk = require("chalk");
const config = require("../json/config.json");
const Client = require("../base/client");
const client = new Client();

// fs.readdirSync("./src/commands")
//       .filter(file => file.endsWith(".js"))
//       .forEach(file => {
//           const command = require(`./commands/${file}`);
//           console.log(chalk.blue('Command ${command.name} loaded'))        
//           client.commands.set(command.name, command);
//       });


// client.on("ready", () => {
//     console.clear(); 

//     console.log("Bot is online!")
// });

// client.on("messageCreate", message => {
	  
//   console.log(chalk.red(message.content));
  
//   if (!message.content.startsWith(config.prefix)) return;
	
//   const args = message.content.substring(config.prefix.length).split(/ +/);

//   switch (args[0]) {
//     case "hello":

//       message.channel.send("Hello")
//       break;

//     case "say":
//       message.channel.send(args.slice(1).join(" "));
//       break;
//   }
// });

// client.login(config.token);
