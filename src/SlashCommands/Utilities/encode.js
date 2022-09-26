const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "encode",
    category: "Utilities",
    premium: true,
    description: "Encode A Text to binary",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'text',
            description: 'The url you want to take screenshot from',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let text = interaction.options.getString('text');
      let msg = await interaction.followUp(`Encoding....`);

      
      let data = await fetch(`https://api.popcat.xyz/encode?text=${text}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(data.binary, client.user.displayAvatarURL(), ``)
      .setFooter(`Thanks for using HelperMaster btw`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
