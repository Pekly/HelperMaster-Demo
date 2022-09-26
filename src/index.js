const { Client, Collection } = require("discord.js");
const chalk = require("chalk");
const colors = require("colors")

const discordModals = require('discord-modals');
const { DiscordTogether } = require('discord-together');
const client = new Client({
    intents: 32767,
});
module.exports = client;



// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
const fs = require(`fs`);
client.discordTogether = new DiscordTogether(client);
client.userSettings = new Collection();
client.config = require("./config.json");
client.emoji = require(`./emoji.json`)



// Initializing the project
require("./handler")(client);
discordModals(client);



client.login(client.config.token)

/*           ANTI CRASHING            ¦¦           ANTI CRASHING           */ 

process.on('unhandledRejection', (reason, p) => {
  console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase().red);
  console.log(reason.stack.yellow ? String(reason.stack).yellow : String(reason).yellow);
  console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase().red);
});
process.on("uncaughtException", (err, origin) => {
  console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase().red);
  console.log(err.stack.yellow ? err.stack.yellow : err.yellow)
  console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase().red);
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase().red);
});


process.on('multipleResolves', (type, promise, reason) => {
  console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase().red);
  console.log(type, promise, reason.yellow);
  console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase().red);
});
