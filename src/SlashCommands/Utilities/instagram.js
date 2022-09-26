const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "instagram",

    category: "Utilities",
premium: true,
    description: "Find An Instagram account info using its username",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'username',
            description: 'The Username for the instagram account',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let username = interaction.options.getString('username');
      let msg = await interaction.followUp(`Searching for the account.... (if this stuck then the account you are trying to find is not valid)`);

      
      let data = await fetch(`https://api.popcat.xyz/instagram?user=${username}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(data.username, client.user.displayAvatarURL(), ``)
      .setDescription(`Full Name: ${data.full_name}\nBio: ${data.biography}\nPosts: ${data.posts}\nReels: ${data.reels}\nFollowing: ${data.following}\nFollowers: ${data.followers}\nIs A Private Account: ${data.private}\nVerified: ${data.verified}`)
      .setImage(data.profile_pic)
      .setFooter(`Thanks for using HelperMaster btw`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
