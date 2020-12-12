const Discord = require('discord.js')
const mathion = require('mathion')
const kiss =

[
    'https://media1.tenor.com/images/4f3603010f0071227affbf2f732d79be/tenor.gif?itemid=10769541',
    'https://media1.tenor.com/images/c621075def6ca41785ef4aaea20cc3a2/tenor.gif?itemid=7679409',
    'https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif?itemid=7380310',
    'https://media1.tenor.com/images/1c986c555ed0b645670596d978c88f6e/tenor.gif?itemid=13142581',
    'https://media1.tenor.com/images/cff010b188084e1faed2905c0f1634c2/tenor.gif?itemid=10161883',
    'https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829',
    'https://media1.tenor.com/images/3c95ca85f89068660becde7a31f0f04d/tenor.gif?itemid=4973550',
    'https://media1.tenor.com/images/f03329d8877abfde62b1e056953724f3/tenor.gif?itemid=13785833',
    'https://media1.tenor.com/images/2e36b49b3d26d1e2fe014e5d4c1dbc75/tenor.gif?itemid=15580060',
    'https://media1.tenor.com/images/6afcfbc435b698fa5ceb2ff019718e6d/tenor.gif?itemid=10480971',
    'https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784',
    'https://media1.tenor.com/images/5511a8309a1719987a27aa7b1ee7da04/tenor.gif?itemid=12303482',
    'https://media1.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif?itemid=5247335',
    'https://media1.tenor.com/images/a7a67336a11b60d292179be1246240c9/tenor.gif?itemid=17175633',
    'https://media1.tenor.com/images/6d77cf1fdaa2e7c6a32c370240a7b77c/tenor.gif?itemid=9523306',
    'https://media1.tenor.com/images/d7c30e46a937aaade4d7bc20eb09339b/tenor.gif?itemid=12003970',
    'https://media1.tenor.com/images/855c900190fb6abfabaed7da4da6f73c/tenor.gif?itemid=16962926',
    'https://media1.tenor.com/images/908cbb28935d3179a93692beb0991540/tenor.gif?itemid=18803029',
    'https://media1.tenor.com/images/0f3ff149d99c8f6ff9cd0d07cbaaa628/tenor.gif?itemid=19462181',
    'https://media1.tenor.com/images/313bb02914ddb9262511b790ef4d4c7b/tenor.gif?itemid=7922535',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'punch',
    category: 'Post',
    commands: ['punch'],
    description: 'Punch someone and hope its a K.O',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(kiss))
        .setColor(`RANDOM`)
    

    message.channel.send(embed)
    }
}