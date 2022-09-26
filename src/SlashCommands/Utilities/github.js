const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "github",
    category: "Utilities",
    description: "Find An Github Account only using its username",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'username',
            description: 'The username for the github account',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let username = interaction.options.getString('username');
      let msg = await interaction.followUp(`Searching for the account.... (if this stuck then the account you are trying to find is not valid)`);

      
      let data = await fetch(`https://api.popcat.xyz/github/${username}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(data.name, client.user.displayAvatarURL(), `${data.url}`)
      .setDescription(`Account Type: ${data.account_type}\nAccount Created At:  ${data.created_at}\nPublic Repository:  ${data.public_repos}\nEmail: ${data.email}\nBio: ${data.bio}\nFollowers: ${data.followers}\nFollowing: ${data.following}`)
      .setImage(data.avatar)
      .setFooter(`Thanks for using HelperMaster btw`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
