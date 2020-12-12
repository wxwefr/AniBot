const Discord = require('discord.js')
const mathion = require('mathion')
const bigbrain = 
[
    'https://media1.tenor.com/images/f31f825f30dd3843d7f222551a100604/tenor.gif?itemid=4621792',
    'https://media1.tenor.com/images/3a49f021bb6b76f64d64a57d17ae11d1/tenor.gif?itemid=16631325',
    'https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif?itemid=5184314',
    'https://media1.tenor.com/images/4f22255d60f3f19edf9296992b4e3483/tenor.gif?itemid=4772697',
    'https://media1.tenor.com/images/4b5e9867209d7b1712607958e01a80f1/tenor.gif?itemid=5298257',
    'https://media1.tenor.com/images/b88fa314f0f172832a5f41fce111f359/tenor.gif?itemid=13356071',
    'https://media1.tenor.com/images/7ef999b077acd6ebef92afc34690097e/tenor.gif?itemid=10893043',
    'https://media1.tenor.com/images/e69ebde3631408c200777ebe10f84367/tenor.gif?itemid=5081296',
    'https://media1.tenor.com/images/7443eb36be27659fc4d3effbaa766db5/tenor.gif?itemid=11358249',
    'https://media1.tenor.com/images/e0fbb27f7f829805155140f94fe86a2e/tenor.gif?itemid=15134708',
    'https://media1.tenor.com/images/09b085a6b0b33a9a9c8529a3d2ee1914/tenor.gif?itemid=5648908',
    'https://media1.tenor.com/images/2fb2965acbf3ed573e8b63080b947fe5/tenor.gif?itemid=5091716',
    'https://media1.tenor.com/images/f5ec64b40d2adf7deb84e3c0e192ff32/tenor.gif?itemid=6194053',
    'https://media1.tenor.com/images/ae4138661bc1930d32c0435ef788c456/tenor.gif?itemid=15805005',
    'https://media1.tenor.com/images/26e7564bfb4408f9f7ff9518d4f87308/tenor.gif?itemid=8199739',
    'https://media1.tenor.com/images/031c7c348d3b86296976e2407723d4a8/tenor.gif?itemid=5014031',
    'https://media1.tenor.com/images/d1529619add194c4275053d852a0bb79/tenor.gif?itemid=14120358',
    'https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249',
    'https://media1.tenor.com/images/75edc9882e5175f86c2af777ffbb14a6/tenor.gif?itemid=5755232',
    'https://media1.tenor.com/images/a53f4017a15753ff10e42770e89ce1d0/tenor.gif?itemid=4555995',
    'https://media1.tenor.com/images/de730b51400ed4dfb66d04141ea79a2d/tenor.gif?itemid=7353410',
    'https://media1.tenor.com/images/213ec50caaf02d27d358363016204d1d/tenor.gif?itemid=4553386',
    'https://media1.tenor.com/images/7618310e4332bd3303acb414348e475c/tenor.gif?itemid=5755226',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'cry',
    category: 'Post',
    commands: ['sad'],
    description: 'Show someone you be crying like a bitch',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(bigbrain))
        .setColor(`RANDOM`)
    

    message.channel.send(embed)
    }
}