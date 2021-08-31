// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);

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
