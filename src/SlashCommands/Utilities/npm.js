const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "npm",
    category: "Utilities",
    description: "View An info For a npm package",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'package_name',
            description: 'The Package name',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let package_name = interaction.options.getString('package_name');
      let msg = await interaction.followUp(`Searching for npm packages... If this stuck more than 20 second then your npm package name is not valid`);

      
      let data = await fetch(`https://api.popcat.xyz/npm?q=${package_name}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.name}`, client.user.displayAvatarURL(), `https://dsc.gg/spacedevdc`)
      .setDescription(`Name ${data.name}\nLatest Version: ${data.version}\n Description: ${data.description}\nKeywords: ${data.keywords}\nCreator/Author: ${data.author}\nAuthor Email: ${data.author_email}\nLast Updated: ${data.last_published}\nMaintainers: ${data.maintainers}\nDownloaded: ${data.downloaded_this_year} Time`)
      .setImage(data.avatar)
      .setFooter(`Powered by Space Development🚀`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
