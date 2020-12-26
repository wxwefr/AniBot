const { MessageEmbed } = require("discord.js")
module.exports = {
    commands: ['support'],
    category: "Info",
    description: "",
    callback: (message, arguments, text, client) => {

        const embed = new MessageEmbed()
        .setTitle(`AniHubs Server`)
        .setURL(`https://discord.gg/RaVuAGG6xD`)
        .setDescription(`Join AniHub for any issues you have with the bot!`)
        .setColor("#90ee90")
        .setFooter(`Best to Ask Aesthetic the questions ;)`)
        message.channel.send(embed)
        return 
    }
}