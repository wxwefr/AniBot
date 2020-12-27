const Discord = require('discord.js')
const mathion = require('mathion')
const bigbrain = ['https://i.imgur.com/gbl5Syv.png', 'https://i.imgur.com/H2s7jrB.png']

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'bigbrain',
    category: 'Post',
    commands: ['bb'],
    description: 'dw',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(bigbrain))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}