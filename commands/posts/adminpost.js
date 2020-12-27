const Discord = require('discord.js')
const mathion = require('mathion')
const ap = ['https://i.imgur.com/gbl5Syv.png', 'https://i.imgur.com/B55oZZm.png', 'https://i.imgur.com/wcKas3D.png']

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'adminpost',
    category: 'Post',
    commands: ['ap'],
    minArgs: 0,
    maxArgs: 1,
    description: 'post random discord mod texts',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(ap))
        .setColor(`RANDOM`)
    

    message.channel.send(embed)
    }
}