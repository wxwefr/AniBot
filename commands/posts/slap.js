const Discord = require('discord.js')
const mathion = require('mathion')
const slap =
[
    'https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612', 
    'https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif?itemid=14358509',
    'https://media1.tenor.com/images/53d180f129f51575a46b6d3f0f5eeeea/tenor.gif?itemid=5373994',
    'https://media1.tenor.com/images/528ff731635b64037fab0ba6b76d8830/tenor.gif?itemid=17078255',
    'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956',
    'https://media1.tenor.com/images/7437caf9fb0bea289a5bb163b90163c7/tenor.gif?itemid=13595529',
    'https://media1.tenor.com/images/b7a844cc66ca1c6a4f06c266646d070f/tenor.gif?itemid=17423278',
    'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif?itemid=5509136',
    'https://media1.tenor.com/images/358986720d4b533a49bdb67cbc4fe3e5/tenor.gif?itemid=14179582',
    'https://media1.tenor.com/images/6885c7676d8645bf2891138564159713/tenor.gif?itemid=4436362',
    'https://media1.tenor.com/images/b221fb3f50f0e15b3ace6a2b87ad0ffa/tenor.gif?itemid=8576304',
    'https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394',
    'https://media1.tenor.com/images/89309d227081132425e5931fbbd7f59b/tenor.gif?itemid=4880762',
    'https://media1.tenor.com/images/47ac5507e827fa6a49a1aff6b070c3eb/tenor.gif?itemid=13278667',
    'https://media1.tenor.com/images/dcd359a74e32bca7197de46a58ec7b72/tenor.gif?itemid=12396060',
    'https://media1.tenor.com/images/a9b8bd2060d76ec286ec8b4c61ec1f5a/tenor.gif?itemid=17784858',
    'https://media1.tenor.com/images/e8f880b13c17d61810ac381b2f6a93c3/tenor.gif?itemid=17897236',
    'https://media1.tenor.com/images/0860d681fbe7ad04a2f39735ab939176/tenor.gif?itemid=13642334',
    'https://media1.tenor.com/images/87d8c345c46744babab5c921edcfb3d8/tenor.gif?itemid=4963178',
    'https://media1.tenor.com/images/35c1ecae2168c49be997871adc2a5d75/tenor.gif?itemid=3412059',
    'https://media1.tenor.com/images/c159cd1d7e7424cf9fd6fbdb09919146/tenor.gif?itemid=14179570',
    'https://media1.tenor.com/images/448e9db420b1d7faadad508b887b2a00/tenor.gif?itemid=7602649',
    'https://media1.tenor.com/images/6e27186637897c41ac8fcc407521ab11/tenor.gif?itemid=16412212',
    'https://media1.tenor.com/images/e2eaf2f2d68cfc2972275ab8d6ae14ae/tenor.gif?itemid=17720272',
    'https://media1.tenor.com/images/4898af788a907060a2bef202248728d7/tenor.gif?itemid=10937029',
    '',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'slap',
    category: 'Post',
    commands: ['slap'],
    description: 'slap some annoying b',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(slap))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}