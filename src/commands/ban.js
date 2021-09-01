const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user from the server'),
	async execute(interaction) {
		await interaction.reply('You are banned!');
	},
};