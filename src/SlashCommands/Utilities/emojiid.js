module.exports = {
  name: "emoji",
  description: "Get ID of emojis",
premium: true,
 category: "Utilities",
  options: [
      {
        name: "name",
        description: "Emoji to get ID of",
        type: 'STRING',
      }
  ],
  run: async (client, interaction, args) => {
      if (interaction.options.getString('name') === undefined) {
          return interaction.followUp("Please specify an emoji to get the ID of.");
      }
      const emojiName = interaction.options.getString('name');
      const emoji = client.emojis.cache.find(emoji => emoji.name === emojiName);
    if (!emoji) {
      return interaction.followUp(
        "Couldn't find the Emojis with the provided name. Please make sure the Emoji name is correct"
      );
    }
     interaction.followUp(`\`\`\`${emoji}\`\`\``);
  },
};