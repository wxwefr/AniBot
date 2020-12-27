const Discord = require('discord.js')
const mathion = require('mathion')
const pat =
[
    'https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932',
    'https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819',
    'https://media1.tenor.com/images/daa885ec8a9cfa4107eb966df05ba260/tenor.gif?itemid=13792462',
    'https://media1.tenor.com/images/6151c42c94df654b1c7de2fdebaa6bd1/tenor.gif?itemid=16456868',
    'https://media1.tenor.com/images/d9b480bcd392d05426ae6150e986bbf0/tenor.gif?itemid=9332926',
    'https://media1.tenor.com/images/c2232aec426d8b5e85e026cbca410463/tenor.gif?itemid=11648944',
    'https://media1.tenor.com/images/2b3ddd79058842ccb9c1fc6acea0bcaa/tenor.gif?itemid=16243971',
    'https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286',
    'https://media1.tenor.com/images/0d2fb6ad9a6d71c3a018c0b37ffca50b/tenor.gif?itemid=16121044',
    'https://media1.tenor.com/images/183ff4514cbe90609e3f286adaa3d0b4/tenor.gif?itemid=5518321',
    'https://media1.tenor.com/images/5466adf348239fba04c838639525c28a/tenor.gif?itemid=13284057',
    'https://media1.tenor.com/images/c0c1c5d15f8ad65a9f0aaf6c91a3811e/tenor.gif?itemid=13410974',
    'https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495',
    'https://media1.tenor.com/images/71e74263a48a6e9a2c53f3bc1439c3ac/tenor.gif?itemid=12434286',
    'https://media1.tenor.com/images/755b519f860ef65a4b9f889aece000fe/tenor.gif?itemid=16085284',
    'https://media1.tenor.com/images/28f4f29de42f03f66fb17c5621e7bedf/tenor.gif?itemid=8659513',
    'https://media1.tenor.com/images/61187dd8c7985c443bf9cd39bc310c02/tenor.gif?itemid=12018805',
    'https://media1.tenor.com/images/fe69e3583343f4e707ad6c5584ec581a/tenor.gif?itemid=16085272',
    'https://media1.tenor.com/images/8c1f6874db27c8227755a08b2b07740b/tenor.gif?itemid=10789367',
    'https://media1.tenor.com/images/b518909216fd793247753ba69d8e94b7/tenor.gif?itemid=16898838',
    'https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853',
    'https://media1.tenor.com/images/46bab773fdf4c340b59b89655abcda79/tenor.gif?itemid=18776498',
    'https://media1.tenor.com/images/6050e5640a4bb058fb1ba9a19e12d997/tenor.gif?itemid=4977531',
    'https://media1.tenor.com/images/37b0ba8252f8698d23c83d889768540b/tenor.gif?itemid=19580650',
    'https://media1.tenor.com/images/9bf3e710f33cae1eed1962e7520f9cf3/tenor.gif?itemid=13236885',
    'https://media1.tenor.com/images/50f83b7de7b235a8ddf6a7563fad511e/tenor.gif?itemid=19639967',
    'https://media1.tenor.com/images/8b5711095b0ba786c43b617bf9c675dd/tenor.gif?itemid=15735895',
    'https://media1.tenor.com/images/f41b3974036070fd1c498acf17a3a42e/tenor.gif?itemid=14751753',
    'https://media1.tenor.com/images/92c3581f23f041054673aaa60b3043b1/tenor.gif?itemid=17385796',
    'https://media1.tenor.com/images/0b3514693ff9071c833feee0bd9657d5/tenor.gif?itemid=18534796',
    'https://media1.tenor.com/images/a2977ac380e2bf2cf809c0e249ea760c/tenor.gif?itemid=16937682',
    'https://media1.tenor.com/images/289abc504b8d9a990ff75056179133e2/tenor.gif?itemid=16085488',
    'https://media1.tenor.com/images/398c9c832335a13be124914c23e88fdf/tenor.gif?itemid=9939761',
    'https://media1.tenor.com/images/368cf6496aa59e583e5a37691ff0c158/tenor.gif?itemid=18449042',
    'https://media1.tenor.com/images/098a45951c569edc25ea744135f97ccf/tenor.gif?itemid=10895868',
    'https://media1.tenor.com/images/c50c9478d193cbc4f8938072427ad092/tenor.gif?itemid=13327143',
    'https://media1.tenor.com/images/8d8c95710c8031bb903ff422c81b8cba/tenor.gif?itemid=17435031',
    'https://media1.tenor.com/images/1a8e560e8873ce2a48b3dfbbaa7805ec/tenor.gif?itemid=11118254',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'pat',
    category: 'Post',
    commands: ['pat', 'headpat'],
    description: 'Give someone a pat',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(pat))
        .setColor(`RANDOM`)
    

    message.channel.send(embed)
    }
}