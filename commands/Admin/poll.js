const Discord = require('discord.js');

module.exports = {
    commands: 'poll',
    description: 'a poll command', 
    category: 'Admin',
    async execute(message, args){
        const { User } = require("discord.js");

                    const sayMessage = args.join(" "); 
                    message.delete().catch(err => console.log(err)); 
                    let embed = new Discord.MessageEmbed()
                        .setColor('#f542ec')
                        .setTitle(` ${message.author.tag}`)
                        .setDescription(sayMessage);
                        embed.setFooter('📊 Waiting for community feedback, please vote!')
                        const msg = await message.channel.send(embed);
                        await msg.react ('✅')
                        await msg.react ('❌')

                }
        
            }