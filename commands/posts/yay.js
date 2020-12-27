const Discord = require('discord.js')
const mathion = require('mathion')
const yay =
['https://media1.tenor.com/images/5cb515ab80024384532856dcbe0c61dc/tenor.gif?itemid=15820393',
 'https://media1.tenor.com/images/aff48b5d06ebb76fef6e067e0e4d9fc0/tenor.gif?itemid=9528804',
 'https://media1.tenor.com/images/7a11bc619ac90fc8dc313d928e698f0c/tenor.gif?itemid=9952045',
 'https://media1.tenor.com/images/54e1add302b9b4a19435e941e290309e/tenor.gif?itemid=9920849',
 'https://media1.tenor.com/images/775311461737833a38475823cf6452a7/tenor.gif?itemid=13894294',
 'https://media1.tenor.com/images/b412f469f381dcacca46fab8a671a29b/tenor.gif?itemid=12294516',
 'https://media1.tenor.com/images/04c9e57a1cb8445026ad6ba210d33c03/tenor.gif?itemid=15696882',
 'https://media.tenor.com/images/95222040cbd85df4aa58d7ece4c5276f/tenor.gif',
 'https://media.tenor.com/images/d8316a10524453cc255a74a0ff60f69f/tenor.gif'
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'yay',
    category: 'Post',
    commands: ['yay'],
    description: 'Celebrate',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(yay))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}