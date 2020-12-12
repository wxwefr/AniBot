const { MessageEmbed } = require("discord.js")
module.exports = {
    commands: ['avatar', 'av'],
    category: "Info",
    description: "Shows users avatar",
    callback: (message, arguments, text, client) => {

        const target = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || message.member 
        const embed = new MessageEmbed()
        .setColor("#90ee90")
        .setAuthor(target.user.tag, target.user.displayAvatarURL({format: "png", dynamic: true}))
        .setImage(target.user.displayAvatarURL({format: "png", dynamic: true, size: 256})) 
        .setTimestamp()
        message.channel.send(embed)
        return 
    }
}