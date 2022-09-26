const Discord = require(`discord.js`)
const fetch = require("node-fetch");

module.exports = {
    name: "lyric",
    category: "Utilities",
    description: "Lyric Finder For A Diffrent song",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'song',
            description: 'The Song name',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let song = interaction.options.getString('song');
      let msg = await interaction.followUp(`Searching for lyrics(if this stuck then the song name is invalid)`);

      
      let data = await fetch(`https://api.popcat.xyz/lyrics?song=${song}`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${data.title}\n Artist: ${data.artist}`, client.user.displayAvatarURL(), ``)
      .setDescription(`${data.lyrics}`)
      .setImage(data.image)
      .setFooter(`Thanks for using HelperMaster btw`)
      .setColor('#f7c555')
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed] });
      }, 500);
    }
}
