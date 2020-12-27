const Discord = require('discord.js')

module.exports = {
    commands: 'penis',
    description: 'penis size',
    category: 'JoJoke',
    callback: (message, arguments, text, client) => {
    var phrases = [
            "8D Smoll",
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D Average Sizer",
            "8======D",
            "8=======D",
            "8========D",
            "8=========D",
            "8===========D BBC Right Here",
                
       ];    
    var phrasemeaning = phrases[Math.floor(Math.random()*phrases.length)]
    

const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || message.member 
    if (!mentionedMember) return message.channel.send('You Need To Mention A Member.')

 const embed = new Discord.MessageEmbed()
    .setTitle(`Penis Calculator`)
    .setDescription(`${phrasemeaning}`)
    .setColor('#f542ec')    
    .setFooter(`The Mentioned Member's Penis Size.`)

message.channel.send(embed)

    }
}