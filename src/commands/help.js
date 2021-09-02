const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
	.setColor('#671fe3')
	.setTitle('Space Merchant Commands')
	.setURL('https://discord.js.org/')
	.setAuthor('Space Merchant', 'https://imgur.com/1mMaiQH.png', 'https://discord.js.org')
	.setDescription('Description goes here')
	.setThumbnail('https://imgur.com/1mMaiQH.png')
	.addFields(
		{ name: 'Commands:', value:'\u200B'},
		{ name: 'help', value: 'Replies with this message.'},
		{ name: 'ping', value: 'Replies with Pong!'},
		{ name: 'ban', value: 'Bans a user from the server.'},
		{ name: 'kick', value: 'Kicks a user from the server.'},
		{ name: 'image', value: 'Shows a random image.'},
		{ name: 'avatar', value: 'Shows the avatar of a targeted user.'},
	)
	.addField('serverinfo', 'Replies with server info.', true)
	.setTimestamp()
	.setFooter('From Space Merchant', 'https://imgur.com/1mMaiQH.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with the commands!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [Embed] })
	},
};