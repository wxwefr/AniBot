const Discord = require('discord.js')
const mathion = require('mathion')
const kiss =
['https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
 'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
 'https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618',
 'https://media1.tenor.com/images/f102a57842e7325873dd980327d39b39/tenor.gif?itemid=12392648',
 'https://media1.tenor.com/images/3d56f6ef81e5c01241ff17c364b72529/tenor.gif?itemid=13843260',
 'https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722',
 'https://media1.tenor.com/images/b8d0152fbe9ecc061f9ad7ff74533396/tenor.gif?itemid=5372258',
 'https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409',
 'https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489',
 'https://media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif?itemid=12879850',
 'https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif?itemid=6206552',
 'https://media1.tenor.com/images/61dba0b61a2647a0663b7bde896c966c/tenor.gif?itemid=5262571',
 'https://media1.tenor.com/images/e858678426357728038c277598871d6d/tenor.gif?itemid=9903014',
 'https://media1.tenor.com/images/68a37a5a1b86f227b8e1169f33a6a6bb/tenor.gif?itemid=13344389',
 'https://media1.tenor.com/images/227aa4313c6c4d4e2091148f4fa37645/tenor.gif?itemid=13975815',
 'https://media1.tenor.com/images/49304ecdf46e62f340d1b790734f37c9/tenor.gif?itemid=12982889',
 'https://media1.tenor.com/images/2c8b6aa48be83de7b505d1d48bb4aa6d/tenor.gif?itemid=18234023',
 'https://media1.tenor.com/images/af1216d35f8ec076b593401b19ddd0bf/tenor.gif?itemid=13188942',
 'https://media1.tenor.com/images/ed08cf43156133b615d427773005083c/tenor.gif?itemid=15810155',
 'https://media1.tenor.com/images/efb9940f90e0bdc1f889a2e8763131bb/tenor.gif?itemid=5391560',
 'https://media1.tenor.com/images/6c6090c058300acf8aacdd1afce4a630/tenor.gif?itemid=17039510',
 'https://media1.tenor.com/images/32d4f0642ebb373e3eb072b2b91e6064/tenor.gif?itemid=15150255',
 'https://media1.tenor.com/images/47cb6c6e70765343835e5b2d1955e804/tenor.gif?itemid=17747859',
 'https://media1.tenor.com/images/ad514e809adc14f0b7722a324c2eb36e/tenor.gif?itemid=14375355',
 'https://media1.tenor.com/images/5cf6c2fef93911111538d837ec71c24c/tenor.gif?itemid=5448064',
 'https://media1.tenor.com/images/c81f4a084bceaaa3a627a6143e84731a/tenor.gif?itemid=17916458',
 'https://media1.tenor.com/images/d7bddc2032a53da99f9a3e5bfadf3cf2/tenor.gif?itemid=17708192',
 'https://media1.tenor.com/images/d9115cb8f24162cf70428d8cb8d96558/tenor.gif?itemid=9382690',
 'https://media1.tenor.com/images/8d702471e66ada086d4b86d64d7d2199/tenor.gif?itemid=5604562',
]

module.exports = {//using wokcommands(npm i wokcommands)
    name : 'kiss',
    category: 'Post',
    commands: ['kiss'],
    description: 'kiss someone',
    callback: async(message, args, text, prefix) => {
        const embed = new Discord.MessageEmbed()
        .setImage(mathion.randArray(kiss))
        .setColor('#f542ec')
    

    message.channel.send(embed)
    }
}