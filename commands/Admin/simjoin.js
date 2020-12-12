module.exports = {
    commands: 'simjoin',
    description: 'simulate join only works if you have set a welcome channel',
    category: 'Configuration',
    requiredPermissions: ['ADMINISTRATOR'],
    callback: (message, args, text, client) => {
      client.emit('guildMemberAdd', message.member)
    },
  }