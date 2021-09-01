const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('avatar')
	.setDescription('Shows the profile picture of a user.')
    .addUserOption(option =>
        option.setName('target')
            .setDescription('User')
            .setRequired(true)),
	async execute(interaction) {
        const member = interaction.options.getMember('target');
        const Embed = new MessageEmbed()
	        .setColor('#671fe3')
	        .setDescription('Users Avatar')
            .setImage(member.avatarURL)
		await interaction.reply({ embeds: [Embed] })
	},
};