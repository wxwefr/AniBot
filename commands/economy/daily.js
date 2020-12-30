const economy = require("../../util/economy")

module.exports = {
    commands: 'daily',
    description: 'Gives you your daily reward of money',
    expectedArgs: '',
    category: 'Economy',
    globalCooldown: '1d',
    callback: async message => {
        

        await economy.addCoins(message.guild.id, message.author.id, 100)
        return message.reply('100 coins have been added to your balance!')


    }
}