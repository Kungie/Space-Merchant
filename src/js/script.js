const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../json/config.json');
const fs = require('fs');
const { userMention, channelMention } = require('@discordjs/builders');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log("I'm Ready!");
	client.user.setActivity('Star Wars', { type: 'WATCHING'});
	client.user.setStatus("dnd");
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) {
		interaction.reply("Invalid Command")
	};

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

 client.on('typingStart', user => {
 	
	let data1 = "\n" + user.user.tag + " started typing in the channel " + user.channel.name + " in " + user.guild.name

	fs.appendFile('../Spy-Log.txt', data1, (err) => { 
      
		// In case of a error throw err. 
		if (err) throw err; 
	}) 
});

client.on('messageCreate', message => {
	
	const channel = client.channels.cache.get('882752048821567558');

	if (message.author.bot === false){

	channel.send( userMention(message.author.id) + " typed " + '"' + message.content + '" in the channel ' + channelMention(message.channelId));

	// Data which will write in a file. 
	let data2 = "\n" + message.author.tag + " typed " + '"' + message.content + '" in the channel ' + message.channel.name
  
	// Write data in 'Output.txt' . 
	fs.appendFile('../Spy-Log.txt', data2, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
	}) 
}});

client.login(token);
