const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, ButtonInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('survey')
        .setDescription('Creates and shows a survey that you have typed in.')
        .addStringOption(option => option.setName('survey').setDescription('Write a survey that will be displayed.').setRequired(true)),
        async execute(interaction) {

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('button-yes')
                        .setLabel('Yes')
                        .setStyle('SUCCESS'),
                    new MessageButton()
                        .setCustomId('button-no')
                        .setLabel('No')
                        .setStyle('DANGER')
                )

            const embed = new MessageEmbed()
                .setColor('#671fe3')
                .setDescription(interaction.options.getString('survey'))

            await interaction.reply({embeds: [embed], components: [row]});
        }
}