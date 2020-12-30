const economy = require('../../util/economy')
const mathion = require('mathion')


module.exports = {
    commands: 'beg',
    expectedArgs: '',
    description: 'Beg for money',
    category: 'Economy',
    cooldown: '5m',
    callback: async message => {

        const loseMoney = Math.random() > 0.875
        if (loseMoney) {
            const moneyToLose = Math.floor(Math.random() * (200 - 100) + 100)
            const userBal = await economy.getCoins(message.guild.id, message.author.id)
            if (moneyToLose > userBal) {
                await economy.addCoins(message.guild.id, message.author.id, -userBal)
                return message.reply(`for begging in an illegal place, you have been fined ${userBal} coins, which was all your money!`)
            }
            await economy.addCoins(message.guild.id, message.author.id, -moneyToLose)
            return message.reply(`for begging in an illegal place, you have been fined ${moneyToLose} coins.`)
        }
        const moneyToWin = Math.floor(Math.random() * (250 - 50) + 50)
        await economy.addCoins(message.guild.id, message.author.id, moneyToWin)
        return message.channel.send(`you made ${moneyToWin} coins from begging!`)


    }
    
}