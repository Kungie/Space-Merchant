const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('image')
	.setDescription('Generates a random image!'),
	async execute(interaction) {
		var num = (Math.floor(Math.random() * 100))

		if (num > 99){
			await interaction.reply("Please enter a number less then 100.")
			return;
		}

		const Embed = new MessageEmbed()
		.setImage(`https://picsum.photos/20${num}`)
		.setColor("671fe3")
		.setTimestamp()
		.setFooter('From Space Merchant', 'https://imgur.com/1mMaiQH.png');
		await interaction.reply({ embeds: [Embed] })
	},
};