const Discord = require('discord.js')
const mathion = require('mathion')
const sleep =
[
    'https://media.tenor.com/images/b2dc8cd683dcd58198a167d4d47928ff/tenor.gif',
    'https://media.tenor.com/images/9bef625db38856933776df9a4c2dac04/tenor.gif',
    'https://media1.tenor.com/images/7175fe4b5e789b94b41a793e2fd4db3d/tenor.gif?itemid=10119996',
    'https://media1.tenor.com/images/bc308ef7ed3753ae73f1ff047e14c554/tenor.gif?itemid=9920974',
    'https://media.tenor.com/images/ecfa71d68bda0adf6ef31bfe6ec942cd/tenor.gif',
    'https://media1.tenor.com/images/c08efe7356f36e19ee3e2489c10d31f3/tenor.gif?itemid=10173924',
    'https://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif?itemid=12048209',
    'https://media1.tenor.com/images/62299afcedd465b631f9baa9786bd83b/tenor.gif?itemid=6238156',
    'https://media.tenor.com/images/e830217a5d9926788ef25119955edc7f/tenor.gif',
    'https://media.tenor.com/images/162b8e742b368de32bdef02a509adc0e/tenor.gif',
    'https://media1.tenor.com/images/c445e2665d12cfda0921291d919cbe9a/tenor.gif?itemid=15069987',
    'https://media.tenor.com/images/be69bf55b44a803beb9110cfc24f4e91/tenor.gif',
    'https://media1.tenor.com/images/3102d607024c60db8592dfe41af2004a/tenor.gif?itemid=5634618',
    'https://media1.tenor.com/images/2d279bd632301e84962c7a54d4429b3f/tenor.gif?itemid=14084215',
    'https://media.tenor.com/images/25db1d5985e077e7b264a0ed0f380aeb/tenor.gif',
    'https://media.tenor.com/images/1aac9dca4048489da639ab0d1ec6f288/tenor.gif',
    'https://media1.tenor.com/images/0da6fcf47041e554e0a0d46ca2dfd3df/tenor.gif?itemid=15687821',
    'https://media1.tenor.com/images/597ac629012395d4448409613f9e79d1/tenor.gif?itemid=12007584',
    'https://media1.tenor.com/images/13a567fbbf951d53e5f8b00bc65c3721/tenor.gif?itemid=10928517',
    'https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874',
    'https://media1.tenor.com/images/7d60d47d1a345883875925de162af36c/tenor.gif?itemid=12011043',
    'https://media.tenor.com/images/5a794e3bd9974d774846db14b4988e01/tenor.gif',
    'https://media.tenor.com/images/9d5739f78d4a409b66bd822b38af6ca7/tenor.gif',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'sleep',
    category: 'Post',
    commands: ['sleepy'],
    description: `Just a dead command to kill off some ppl`,
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(sleep))
        .setColor('purple')
    

    message.channel.send(embed)
    }
}