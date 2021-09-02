const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('rename')
	.setDescription('Sets a name for a user.')
	.addUserOption(option =>
		option.setName('target')
			.setDescription('The input to target user')
			.setRequired(true))
    .addStringOption(option =>
        option.setName('new-name')
            .setDescription('New name for the user.')
            .setRequired(true)),
	async execute(interaction) {
        if(!interaction.member.permissions.has('ADMINISTRATOR')) {
            await interaction.reply("You don't have the permission to rename someone.");
            return;
        }
        const member = interaction.options.getMember('target');
        const newName = interaction.options.getString('new-name');
        member.setNickname(newName);
        console.log(member)
        await interaction.reply('Username has been reset.');
	},
};