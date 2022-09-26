const Discord = require(`discord.js`)
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "pastebin",
    category: "Utilities",
    description: "Create A Pastebin Code snippets",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'code',
            description: 'The code that you want to post on pastebin!',
            required: true,
            type: `STRING`
        }],
    run: async (client, interaction, args) => {
      let code = interaction.options.getString('code');
      let msg = await interaction.followUp(`Please Wait...`);

      
      let data = await fetch(`https://normal-api.tk/pastebin?text=${code}&privacy=public`).then(x => x.json())
      const embed = new Discord.MessageEmbed()
      .setAuthor(`Successfully Added The Link to Pastebin`)
      .setDescription(`<a:yes:962966293764505620> The code ${data.text} Is Successfully On sourcebin! Click The Button To Go to the link`)
      .setFooter(`Powered by Space Development🚀`)
      .setColor('#f7c555')
      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`${data.raw}`)
				.setLabel('Raw Code (Cant Be Edited) Aka Read Only')
				.setStyle('LINK'),
			);
            const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`${data.url}`)
				.setLabel('Full Snippet Code (Can Be Edited)')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [embed], components: [row, row2,] });
      }, 500);
    }
}
