const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('image')
	.setDescription('Generates a random image!')
    .addIntegerOption(option =>
        option.setName('number')
            .setDescription('Number')
            .setRequired(true)),
	async execute(interaction) {
		var num = (interaction.options.getInteger("number"))

		if (num > 99){
			await interaction.reply("Please enter a number less then 100.")
			return;
		}

		const Embed = new MessageEmbed()
		.setImage(`https://picsum.photos/20${num}`)
		.setTimestamp()
		.setFooter('From Space Merchant', 'https://imgur.com/1mMaiQH.png');
		await interaction.reply({ embeds: [Embed] })
		num = num + 5;
		console.log(num);
	
	},
};