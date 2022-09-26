const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "reverse",
    category: "Utilities",
    description: "Reverse",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'text',
            description: 'Text that you want to reverse for',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let text = interaction.options.getString('text');
      
      let msg = await interaction.followUp(`Reversing....`);

      
      let data = await fetch(`https://api.popcat.xyz/reverse?text=${text}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(data.text, client.user.displayAvatarURL(), ``)
      .setFooter(`Thanks for using HelperMaster btw`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
