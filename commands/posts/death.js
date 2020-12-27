const Discord = require('discord.js')
const mathion = require('mathion')
const death =
[
    'https://media1.tenor.com/images/25a5b0faa2044db0b1e5e3ab2fb8d4f0/tenor.gif?itemid=15157935',
    'https://media1.tenor.com/images/4b8a20e7dbd56575f1af27d9d26ff5e5/tenor.gif?itemid=3893716',
    'https://media1.tenor.com/images/f1e22aead0a7da83a6949984208d527f/tenor.gif?itemid=18770900',
    'https://media1.tenor.com/images/bc95277aeee35ff93253789e9d68e13f/tenor.gif?itemid=11385161',
    'https://media1.tenor.com/images/79f1a0dd1bfc67b44c2d7ce4404c2a66/tenor.gif?itemid=5417340',
    'https://media1.tenor.com/images/56227f5843ac7b2e1c1cb5a0fb486b6d/tenor.gif?itemid=10252931',
    'https://media1.tenor.com/images/cc70ac586a09d39581decddd01081adb/tenor.gif?itemid=13386931',
    'https://media.tenor.com/images/9fbe7657b7ec833dbe6b77d62dc9b393/tenor.gif',
    'https://media1.tenor.com/images/c2c9b32059b5abe04b7fd7c859905e8a/tenor.gif?itemid=15934339',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'death',
    category: 'Post',
    commands: ['dead'],
    description: `Just a dead command to kill off some ppl`,
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(death))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}