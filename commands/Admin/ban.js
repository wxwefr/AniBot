const Discord = require('discord.js');

module.exports = {
    commands: 'ban',
    category: 'Admin',
    permissions: ['BAN_MEMBERS', 'ADMINISTRATOR'],
    description: 'Ban a member thats being retarded',
    permissionError: 'You do not have permission to run this command, if you think that this is an error. Contact the Bot Developer',
    requiredChannel: `logs`,
    callback: (message, arguments, text) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]) || arguments[0];

        if(!arguments[0]) return message.reply('Please specify either the user\'s ID or mention the user for this command to work.');

        if(!member) return message.channel.send('I can\'t seem to find this user in this discord server..');
        if(!member.bannable) return message.reply('This user can\'t be banned. It is either because they are a Mod/Admin, or their highest role is higher than mine, or they are not in the server at all.');

        let reason = arguments.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        message.guild.members.ban(member, { reason: reason})

        const banembed = new Discord.MessageEmbed()
        .setColor('#f542ec')
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addFields(
            {
                name: 'Member Banned:',
                value: member
            },
            {
                name: 'Banned by Moderator:',
                value: message.author
            },
            {
                name: 'For Reason:',
                value: reason
            },
        )
        .setFooter('Time Banned:', message.author.displayAvatarURL())
        .setTimestamp()

        member.send(banembed)

        message.channel.send(`${message.author} that user is successfully banned`)
        message.channel.send(banembed)
    }
}