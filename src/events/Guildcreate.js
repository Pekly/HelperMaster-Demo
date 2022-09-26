const client = require("../index.js")
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

client.on('guildCreate', async (guild) => {
  const slashCommands = await globPromise(`${process.cwd()}/SlashCommands/*/*.js`);
  const arrayOfSlashCommands = [];
  slashCommands.map((value) => {
    const file = require(value);
    if (!file?.name) return;
    client.slashCommands.set(file.name, file);

    if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
    if(file.userPermissions) file.defaultPermission = false;
    arrayOfSlashCommands.push(file);
  });

  await client.application.commands.set(arrayOfSlashCommands);
  return console.log(`⚙️ [SLASH COMMAND (CREATE)] >>> Created Slash-Commands In a new guild!\n🪧 [GUILD/SERVER NAME] >>> ${guild.name}`)
})