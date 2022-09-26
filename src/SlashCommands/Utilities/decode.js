const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "decode",
    category: "Utilities",
premium: true,
    description: "Decode A Binary Number to text",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'binary',
            description: 'The Binary Number',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let binary = interaction.options.getString('binary');
      if(interaction.content == '') x = 'no%20content'
      let msg = await interaction.followUp(`Decoding....`);

      
      let data = await fetch(`https://api.popcat.xyz/decode?binary=${binary}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(data.text , client.user.displayAvatarURL(), `https://dsc.gg/spacedevdc`)
      .setFooter(`Thanks for using HelperMaster btw`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
