const Discord = require('discord.js')
const axios = require('axios')//npm i axios
module.exports = {//using wokcommands(npm i wokcommands)
    name : 'clyde',
    category: 'JoJoke',
    commands: ['cly'],
    minArgs: 1,
    maxArgs: -1,  
    syntaxError: 'please use: {PREFIX}clyde <message>',
    description: 'make clyde write what you writing',
    callback: async(message, args, text, client, prefix, instance) => {
        axios
        .get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`)
        .then((res) => {
          message.channel.send(res.data.message)
        })
        .catch((err) => {
          console.error('ERR:', err)
        })    
    }
}