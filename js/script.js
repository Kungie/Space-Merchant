const { Client, Intents, Message } = require("discord.js");
const { token } = require("../json/config.json");
const command = require("./command");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.clear();
  console.log("I'm Ready!");
  client.user.setActivity("Porno", { type: "WATCHING" });
});

client.on("messageCreate", message => {
  console.log(message.content);
});

client.login(token);
