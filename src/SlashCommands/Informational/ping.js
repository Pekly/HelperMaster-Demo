const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require(`discord.js`);

module.exports = {
    name: "ping",
    category: "🔰 Info",
    description: "Finds the bots edit message speed",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Pinging..`);
const embed = new Discord.MessageEmbed()
      .setTitle(`Ping Succesfully Attempted <a:yes:964445140548734978>`)
 .setDescription(`Ping From Discord API Took me ${client.ws.ping} ms`)
      .setFooter(`Created With 💘 By Udayana`)
      .setColor('#f7c555')

      setTimeout(() => {
         msg.edit({ content: ` `, embeds: [embed] }).catch(e=>{
          console.log(e.stack ? String(e.stack).grey : String(e).grey)
          return interaction.followUp(`An Error occured⚠`).catch(() => {})
        });
      }, 500);
        
    },
};
