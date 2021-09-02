const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('kick')
	.setDescription('Kicks a user!')
	.addUserOption(option =>
		option.setName('target')
			.setDescription('The input to target user')
			.setRequired(true)),
	async execute(interaction) {
		if (interaction.member.permissions.has("KICK_MEMBERS")){
			await interaction.reply('You have thrown someone into space void!');
        	const member = interaction.options.getMember('target');
        	member.kick();
		} else {
			interaction.reply("You don't have permission to kick someone.")
		}
	},
};