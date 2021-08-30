const { Client, Intents } = require('discord.js');
const { token } = require('../json/config.json');
const command = require("./command");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log("I'm Ready!");

    command(client, "test", (message) =>{

        message.reply("Test")
    })







});

client.login(token);
