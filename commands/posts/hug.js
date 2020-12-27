const Discord = require('discord.js')
const mathion = require('mathion')
const hug =
[
    'https://media.tenor.com/images/e497ac255d385341ad4317d1628e75e9/tenor.gif',
    'https://media.tenor.com/images/0b21df83a8ce4f1890061d7bfb1c253e/tenor.gif',
    'https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075',
    'https://media1.tenor.com/images/e9d7da26f8b2adbb8aa99cfd48c58c3e/tenor.gif?itemid=14721541',
    'https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471',
    'https://media.tenor.com/images/fec973cdb301f5179dca6eef16499ab0/tenor.gif',
    'https://media.tenor.com/images/7fb2191b81067c1ca30364ad49f8ae32/tenor.gif',
    'https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788',
    'https://media1.tenor.com/images/1d94b18b89f600cbb420cce85558b493/tenor.gif?itemid=15942846',
    'https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif?itemid=9920978',
    'https://media.tenor.com/images/a0d715f3425cf0b9397ed289b0a03ce7/tenor.gif',
    'https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif?itemid=9375012',
    'https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856',
    'https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif?itemid=10522729',
    'https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif?itemid=15249774',
    'https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif?itemid=7864716',
    'https://media1.tenor.com/images/af76e9a0652575b414251b6490509a36/tenor.gif?itemid=5640885',
    'https://media1.tenor.com/images/34a1d8c67e7b373de17bbfa5b8d35fc0/tenor.gif?itemid=8995974',
    'https://media1.tenor.com/images/460c80d4423b0ba75ed9592b05599592/tenor.gif?itemid=5044460',
    'https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630',
    'https://media1.tenor.com/images/203df2c2d6288d8c73fd56b1e2da559e/tenor.gif?itemid=14898682',
    'https://media1.tenor.com/images/b7487d45af7950bfb3f7027c93aa49b1/tenor.gif?itemid=9882931',
    'https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093',
    'https://media1.tenor.com/images/228cc8397577141822195070c88f6083/tenor.gif?itemid=4977890',
    'https://media1.tenor.com/images/b62f047f8ed11b832cb6c0d8ec30687b/tenor.gif?itemid=12668480',
    'https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589',
    'https://media1.tenor.com/images/d2a2b216ef3bc74406f661049f937999/tenor.gif?itemid=17023255',
    'https://media1.tenor.com/images/b4b95730d9967a97bc54457f928f1181/tenor.gif?itemid=7274071',
    'https://media1.tenor.com/images/45b1dd9eaace572a65a305807cfaec9f/tenor.gif?itemid=6238016',
    'https://media1.tenor.com/images/a2b938d651a8f6b89ed4c02f9f8c13ed/tenor.gif?itemid=12010176',
    'https://media1.tenor.com/images/818babd61d02604c6acedad02281ec7f/tenor.gif?itemid=16593017',
    'https://media1.tenor.com/images/c9e2e21f4eedd767a72004e4ab521c9d/tenor.gif?itemid=13576064',
    'https://media1.tenor.com/images/1506349f38bf33760d45bde9b9b263a4/tenor.gif?itemid=17266781',
    'https://media.tenor.com/images/5168f705907ad3f19862f81eb3c1a60a/tenor.gif',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'hug',
    category: 'Post',
    commands: ['hug'],
    description: `give someone a hug they need it`,
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(hug))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}