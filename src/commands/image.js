const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('image')
		.setDescription('Generates an avatar for you!'),
	async execute(interaction) {
		var image = ("https://picsum.photos/200/300")

		const Embed = new MessageEmbed()
    	.setImage(image)
		.setFooter('From Space Merchant', 'https://imgur.com/1mMaiQH.png');

		await interaction.reply({ embeds: [Embed] })
	},
};