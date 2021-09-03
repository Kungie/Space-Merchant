const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../json/config.json');
const fs = require('fs');
const { userMention, channelMention, memberNicknameMention } = require('@discordjs/builders');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log("I'm Ready!");
	client.user.setActivity('Star Wars', { type: 'WATCHING'});
	client.user.setStatus("online");
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) {
		interaction.reply("Invalid Command")
	};

	const command = client.commands.get(interaction.commandName);

	if (!command){
		interaction.reply("Invalid Command")
	};

	try {
		await command.execute(interaction);
		console.log( "The command '" + interaction.commandName + "' used by '" + interaction.user.tag + "' in the channel '" + interaction.channel.name + "' in " + interaction.guild.name)
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('typingStart', user => {	
	let data1 = "\n" + user.user.tag + " started typing in the channel '" + user.channel.name + "' in " + user.guild.name

	fs.appendFile('../Spy-Log.txt', data1, (err) => {     
		// In case of a error throw err. 
		if (err) throw err; 
	}) 
});

client.on('messageCreate', message => {

	if (message.author.bot === false){

	// Data which will write in a file. 
	let data2 = "\n" + message.author.tag + " typed " + '"' + message.content + '" in the channel ' + message.channel.name
	// Write data in 'Output.txt' . 
	fs.appendFile('../Spy-Log.txt', data2, (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
	}) 
}else if (message.content === "" ){
	return;
}
});

client.on('guildMemberAdd', member => {
	const channel = client.channels.cache.get('882916429463171113');

	channel.send(userMention(member.user.id) + " joined the server!")

	let data3 = "\n" + member.user.tag + " joined the server " + member.guild.name
	// Write data in 'Output.txt' . 
	fs.appendFile('../Spy-Log.txt', data3, (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
	}) 
})

client.on('guildMemberRemove', member => {
	const channel = client.channels.cache.get('882916429463171113');

	channel.send(userMention(member.user.id) + " left the server!")

	let data4 = "\n" + member.user.tag + " left the server " + member.guild.name
	// Write data in 'Output.txt' . 
	fs.appendFile('../Spy-Log.txt', data4, (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
	}) 
})

client.on("messageDelete",  message => {
	const channel = client.channels.cache.get('882916429463171113');

	channel.send(userMention(message.author.id) + "' message has been deleted by someone!")
})

client.on("guildBanAdd", ban =>{
	const channel = client.channels.cache.get('882916429463171113');
 	channel.send(userMention(ban.user.id) + " has been banned!" )
})

client.login(token);
