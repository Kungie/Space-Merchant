const { prefix } = require("../json/config.json"); //calling prefix variable from json file

module.exports = (client, aliases, callback) => {
  //command handler

  if (typeof aliases === "string") {
    // if aliases is a string puts it in an array
    aliases = [aliases];
  }

  client.on("message", (message) => {
    //listens messages and responds them
    const { content } = message;

    aliases.forEach((alias) => {
      const command = "${prefix}${alias}";

      if (content.startsWith("${command} ") || content == command) {
        console.log("Running command ${command}!");
        callback(message);
      }
    });
  });
};
