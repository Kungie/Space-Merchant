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
        console.log(member.user.avatar);
        const Embed = new MessageEmbed()
	        .setColor('#671fe3')
	        .setDescription("User's Avatar")
            .setImage(`https://cdn.discordapp.com/avatars/${member.id}/${member.user.avatar}.png?size=256`)
		await interaction.reply({ embeds: [Embed] })
	},
};