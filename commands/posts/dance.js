const Discord = require('discord.js')
const mathion = require('mathion')
const dance =
[
    'https://media1.tenor.com/images/1ffd01ed2b84b4465b50d758aba36751/tenor.gif?itemid=15871680',
    'https://media1.tenor.com/images/c925511d32350cc04411756d623ebad6/tenor.gif?itemid=13462237',
    'https://media.tenor.com/images/bce266de5f7567950bf97de3c23a22e9/tenor.gif',
    'https://media.tenor.com/images/2d7af1cadb240523b8d1eaafdfd4bdd9/tenor.gif',
    'https://media.tenor.com/images/c7255b82e75405f7c9d45edac97a3b93/tenor.gif',
    'https://media.tenor.com/images/275de942f2975416c721e69e1140ca79/tenor.gif',
    'https://media1.tenor.com/images/2ba4b3c691dc6a4712ddf9eef7631ca0/tenor.gif?itemid=11984235',
    'https://media1.tenor.com/images/a1e2967207391a46b54097b2abde78e4/tenor.gif?itemid=16415258',
    'https://media1.tenor.com/images/1898f99ff4ce6348bb0738c28d2e2894/tenor.gif?itemid=14813413',
    'https://media1.tenor.com/images/97514c64332ac4660b16513fed65de84/tenor.gif?itemid=4874892',
    'https://media1.tenor.com/images/766599022416cc0b7b7b1bd2040eb2db/tenor.gif?itemid=12039886',
    'https://media1.tenor.com/images/81c0b8d3c0617d2902319b7f67e6ce01/tenor.gif?itemid=7560551',
    'https://media1.tenor.com/images/04c39f437de3bda67d2dc35bbb563d88/tenor.gif?itemid=12817361',
    'https://media1.tenor.com/images/8f0385b075b2142dde6acc43f0927cbc/tenor.gif?itemid=12200645',
    'https://media1.tenor.com/images/aa9374ef547c871d4626a22d24042d1f/tenor.gif?itemid=10495378',
    'https://media1.tenor.com/images/9841990160f71767843af6cf08b5502d/tenor.gif?itemid=9251559',
    'https://media1.tenor.com/images/7223978d7ea3087fc36a16c1056d45c5/tenor.gif?itemid=16172051',
    'https://media1.tenor.com/images/7627a7009dcd44f40bcf3c168f0c6ad6/tenor.gif?itemid=16108170',
    'https://media1.tenor.com/images/8a2e22ee850f5b6ce80223c3dda78273/tenor.gif?itemid=13451376',
    'https://media1.tenor.com/images/d250c06c34f6961087a83c6fd79d0711/tenor.gif?itemid=4718235',
    'https://media1.tenor.com/images/c5bf0c167048f0baf563e42611a1eaa2/tenor.gif?itemid=14872583',
    'https://media1.tenor.com/images/078d0df8e8fc0d28533b647326bf8f3d/tenor.gif?itemid=13706721',
    'https://media1.tenor.com/images/21e860a31f32d5e3e6bdf2963cadfebf/tenor.gif?itemid=5897404',
    'https://media1.tenor.com/images/94e0a12faac0821738185def2d96a808/tenor.gif?itemid=7797151',
    'https://media1.tenor.com/images/7a619022867272e397efe3f7df3bd15a/tenor.gif?itemid=16365990',
    'https://media1.tenor.com/images/6a85fa01a531afd84a54ba7c008a367a/tenor.gif?itemid=12042607',
    'https://media1.tenor.com/images/d8fb39693bab23e2c3b4ee36317a36ee/tenor.gif?itemid=17836773',
    'https://media1.tenor.com/images/0b39752a9e328237ce09af5f3c379b20/tenor.gif?itemid=12042399',
    'https://media1.tenor.com/images/6c21b5fcca08d28b42dacfab6f2f65ab/tenor.gif?itemid=15636787',
    'https://media.tenor.com/images/5d5be49b91c3bbb50037de647730d9e1/tenor.gif',

]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'dance',
    category: 'Post',
    commands: ['dance'],
    description: 'Dance',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(dance))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}