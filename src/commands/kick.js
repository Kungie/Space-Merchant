const { SlashCommandBuilder } = require('@discordjs/builders');
const { User } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('kick')
	.setDescription('Kicks a user!')
	.addUserOption(option =>
		option.setName('target')
			.setDescription('The input to target user')
			.setRequired(true)),
	async execute(interaction) {
        await interaction.reply('You have thrown someone into space void!');
        const member = interaction.options.getMember('target');
        member.kick();
	},
};