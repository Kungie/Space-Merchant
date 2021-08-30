const {Client, Intents} = require("discord.js");
const command = require("./command");

command(Client, "ban", (message) => {
    message.channel.send("Hahaha banlandın");
})