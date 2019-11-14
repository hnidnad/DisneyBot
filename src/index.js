const commandList = require("./command-list");
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// Attemps to connect to Discord
try {
    client.login(process.env.DISCORD);
} catch (e) {
    console.log("Discord is down");
}

// Message the client displays when ready
client.on("ready", () => {
    console.log("Bot Online");
    client.user.setActivity("Disney+", { type: "WATCHING" });
});

// This reads the message and sends the appropriate command
client.on("message", message => {
    const response = commandList[message.content];
    if (response) {
        message.channel.send(response(message.content))
    }
});
