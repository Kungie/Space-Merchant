const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const command = require("./command");
class Client extends Discord.Client {
    constructor(options) {
        super({ intents });
          
        this.commands = new Discord.Collection();
    }
}