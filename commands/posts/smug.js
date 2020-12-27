const Discord = require('discord.js')
const mathion = require('mathion')
const smug =
[
    'https://media1.tenor.com/images/6fcfbab36f6d2c578abd6228d1e74231/tenor.gif?itemid=9810121',
    'https://media1.tenor.com/images/daa1824574947530e1a86fd4f0b74761/tenor.gif?itemid=13940350',
    'https://media1.tenor.com/images/1fe93596a8a0f84078b936305b319c55/tenor.gif?itemid=6194051',
    'https://media1.tenor.com/images/ea2e6ec351e238d8e8bd624b3738a9b3/tenor.gif?itemid=14210719',
    'https://media1.tenor.com/images/92a4c0b375212ac29aab2a63ced12e24/tenor.gif?itemid=4733013',
    'https://media1.tenor.com/images/76f7160c04d244a5f34d77d25122344e/tenor.gif?itemid=13598613',
    'https://media1.tenor.com/images/54c781ad45eb7347b07e2207daa08ee5/tenor.gif?itemid=8075676',
    'https://media1.tenor.com/images/7ad6d97772f86111611ff91532dbbd31/tenor.gif?itemid=15168575',
    'https://media1.tenor.com/images/66a6988ccf6e1700458866d4ce664ace/tenor.gif?itemid=14770509',
    'https://media1.tenor.com/images/a7a495be99de980b6bcdb77aa0849c44/tenor.gif?itemid=10358099',
    'https://media1.tenor.com/images/aa6d975cb5318886db35f27f692d09d3/tenor.gif?itemid=14495461',
    'https://media1.tenor.com/images/7a72632f2d105bd91166432e8ad642db/tenor.gif?itemid=13598614',
    'https://media1.tenor.com/images/aec4dd57849dc24fbc0487c492b1d3a3/tenor.gif?itemid=14632552',
    'https://media1.tenor.com/images/95eef717c4302a29afe433de361f9174/tenor.gif?itemid=13820031',
    'https://media1.tenor.com/images/06a06df0112127f4dadcd8497829a13d/tenor.gif?itemid=9385428',
    'https://media1.tenor.com/images/52ea7d449a5402030a3432fd3c94aa99/tenor.gif?itemid=13119051',
    'https://media1.tenor.com/images/a8b2be5d5652374c073fb8190099c82e/tenor.gif?itemid=16228071',
    'https://media1.tenor.com/images/d8c53030aba463f65e8c5487d941088f/tenor.gif?itemid=18434501',
    'https://media1.tenor.com/images/af1be6311cdf1c3aa4dc0d18e4d3bf75/tenor.gif?itemid=19580464',
    'https://media1.tenor.com/images/f2e0111cdbbe40da4d29d85f5edd6526/tenor.gif?itemid=18449811',
    'https://media1.tenor.com/images/0dbc24b7b195bca10dd04e57c3823c64/tenor.gif?itemid=9779997',
    'https://media1.tenor.com/images/f5676b81dee45d845c7e0b118c41c8de/tenor.gif?itemid=17999805',
    'https://media1.tenor.com/images/153a2202d3254d336501f5a85407b352/tenor.gif?itemid=18690957',
    'https://media1.tenor.com/images/58899ca7e0ffa4a785ad23ccda01e082/tenor.gif?itemid=13979455',
    'https://media1.tenor.com/images/31475941926740e505245fc5f9a47e76/tenor.gif?itemid=16586714',
    'https://media1.tenor.com/images/d8f83e65d6b8f337454f17ff3a26407c/tenor.gif?itemid=17855744',
    'https://media1.tenor.com/images/a52abcb7b019e688c149910bc879f934/tenor.gif?itemid=15896454',
    'https://media1.tenor.com/images/ca9adeb8e53c5fa7e3c705ea60df2f14/tenor.gif?itemid=15157933',
    'https://media1.tenor.com/images/d9b3127da3f9419cbb28f9f7c00860d8/tenor.gif?itemid=9588226',
    'https://media1.tenor.com/images/a2c669f5cce333292d586f85294a47e7/tenor.gif?itemid=13843233',
    'https://media.tenor.com/images/15ff8f4324e527bc98242b9b8e80b1bb/tenor.gif',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'smug',
    category: 'Post',
    commands: ['smug'],
    description: 'Send someone a smug',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(smug))
        .setColor(`RANDOM`)
    

    message.channel.send(embed)
    }
}