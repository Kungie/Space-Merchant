const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('ban')
	.setDescription('Bans a user!')
	.addUserOption(option =>
		option.setName('target')
			.setDescription('The input to target user')
			.setRequired(true)),
	async execute(interaction) {
        if(!interaction.member.permissions.has('ADMINISTRATOR')) {
            await interaction.reply("You don't have the permission to ban someone.")
            return;
        }
        await interaction.reply('You have thrown someone into space void!');
        const member = interaction.options.getMember('target');
        member.ban();
	},
};