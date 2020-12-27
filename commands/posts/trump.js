const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'trump',
    description: 'Make trump say some retarded shit',
    minArgs: 1,
    category: 'Post',
    expectedArgs: ['Text to Trump tweet.'],
    callback: async (message, arguments, text, client) => {
        if (message.author.bot === false) {
            const result = arguments.join('+')
            const url = `https://api.no-api-key.com/api/v2/trump?message=${result}`;

            const embed = new MessageEmbed().setImage(url).setColor('#f542ec');

            await message.channel.send(embed);
        }

    }
}