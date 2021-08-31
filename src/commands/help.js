const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
	.setColor('#671fe3')
	.setTitle('Space Merchant Commands')
	.setURL('https://discord.js.org/')
	.setAuthor('Space Merchant', 'https://imgur.com/1mMaiQH.png', 'https://discord.js.org')
	.setDescription('Description')
	.setThumbnail('https://imgur.com/1mMaiQH.png')
	.addFields(
		{ name: 'Commands:', value: 'The way you use the bot.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'help', value: 'Replies with\nthis message.', inline: true },
		{ name: 'ping', value: 'Replies with\nPong!', inline: true },
	)
	.addField('serverinfo', 'Replies with\nserver info.', true)
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