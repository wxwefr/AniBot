const Discord = require('discord.js')
const mathion = require('mathion')
const poke =
[
    'https://media1.tenor.com/images/ed17c87c5189cb40474224b8ac5da695/tenor.gif?itemid=5061634',
    'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
    'https://media1.tenor.com/images/ab936c887562756472f83850426bf6ef/tenor.gif?itemid=11956062',
    'https://media1.tenor.com/images/e8e15ece5fe1b91e8d349402b8fe1fad/tenor.gif?itemid=16935453',
    'https://media1.tenor.com/images/8d82ec69b004ac909881420724d6daa7/tenor.gif?itemid=11823786',
    'https://media1.tenor.com/images/dbde71d42e747010b980422b88e77f9b/tenor.gif?itemid=16935420',
    'https://media1.tenor.com/images/e8b25e7d069c203ea7f01989f2a0af59/tenor.gif?itemid=12011027',
    'https://media1.tenor.com/images/b2d24e9481c5ff7a116457b03fc03a28/tenor.gif?itemid=17172207',
    'https://media1.tenor.com/images/1a64ac660387543c5b779ba1d7da2c9e/tenor.gif?itemid=12396068',
    'https://media1.tenor.com/images/514efe749cb611eb382713596e3427d8/tenor.gif?itemid=13054528',
    'https://media1.tenor.com/images/1e0ea8b241a7db2b9c03775133138733/tenor.gif?itemid=10064326',
    'https://media1.tenor.com/images/8fe23ec8e2c5e44964e5c11983ff6f41/tenor.gif?itemid=5600215',
    'https://media1.tenor.com/images/a4f116c4f61361e25ad5a0eb9d9ef38c/tenor.gif?itemid=14835795',
    'https://media1.tenor.com/images/01b264dc057eff2d0ee6869e9ed514c1/tenor.gif?itemid=14346763',
    'https://media1.tenor.com/images/4f886a9db21b5398f2ad91178887ed4d/tenor.gif?itemid=12583168',
    'https://media1.tenor.com/images/530d48d0fc0711b97e01fea4fdb83422/tenor.gif?itemid=16896852',
    'https://media1.tenor.com/images/f8a48a25f47d5d12342705c7c87368bb/tenor.gif?itemid=14134415',
    'https://media1.tenor.com/images/a0deb2094ececc2ab39c75337fcfd1c5/tenor.gif?itemid=18336426',
    'https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif?itemid=7739077',
    'https://media1.tenor.com/images/75766426d644310291a6db0766880354/tenor.gif?itemid=15760257',
    'https://media1.tenor.com/images/52d8b3adf653404a827e9e9374e37a74/tenor.gif?itemid=5581320',
    'https://media1.tenor.com/images/76e377271bf00ba61d954b2752713596/tenor.gif?itemid=5075308',
    'https://media.tenor.com/images/853b56497337625d8dca7498e026841d/tenor.gif',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'poke',
    category: 'Post',
    commands: ['poke'],
    description: 'poke someone',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(poke))
        .setColor(`RANDOM`)
    

    message.channel.send(embed)
    }
}