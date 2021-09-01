const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('image')
	.setDescription('Generates a random image!')
    .addIntegerOption(option =>
        option.setName('number_01-100')
            .setDescription('Number')
            .setRequired(true)),
	async execute(interaction) {
		var num = (interaction.options.getInteger("number_01-100"))

		const Embed = new MessageEmbed()
		.setImage(`https://picsum.photos/200/3${num}`)
		.setFooter('From Space Merchant', 'https://imgur.com/1mMaiQH.png');
		await interaction.reply({ embeds: [Embed] })
		num = num + 5;
		console.log(num);
	
	},
};