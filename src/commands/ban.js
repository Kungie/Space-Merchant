const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('ban')
	.setDescription('Bans a user!')
	.addUserOption(option =>
		option.setName('target')
			.setDescription('The input to target user')
			.setRequired(true))
    .addStringOption(option =>
        option.setName('reason')
        .setDescription("The reason to ban the target")
        .setRequired(true))
    .addIntegerOption(option =>
        option.setName('days')
        .setDescription("How long will the ban last")
        .setRequired(true)),    
	async execute(interaction) {
        if(!interaction.member.permissions.has('ADMINISTRATOR')) {
            await interaction.reply("You don't have the permission to ban someone.")
            return;
        }
        await interaction.reply('You have thrown someone into space void!');
        const member = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');
        const days = interaction.options.getInteger('days')

        if (days > 7){ return }

        member.ban({reason: reason, days: days});
	},
};