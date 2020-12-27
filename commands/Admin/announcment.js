const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "an",
    permissions: ["ADMINISTRATOR"],
    callback: (message, args, text, client) => {
        const channel = message.mentions.channels.first()
        if (!channel) {
            message.reply("Specify the channel to send this announcement")
            return
        } else {
            let annuncment = args.slice(1).join(" ")
            if(!annuncment) return message.channel.send(`You did not specify what you want to announce`)
            const Embed = new MessageEmbed()
            .setTitle(`New Announcment!`)
            .setDescription(`${annuncment}`)
            .setFooter(`Sent by: ${message.author.tag}`)
            .setColor('#f542ec')
            channel.send(`@everyone`).then(m => m.delete())
            channel.send(Embed)
        }
    }
}