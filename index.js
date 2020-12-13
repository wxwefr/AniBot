const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new DiscordJS.Client()

client.on('ready', () => {
  console.log(`[✅ Bot] ${client.user.tag} Online!`)


  function randomStatus() {
    let status = ["?help", "Anime", "thighs", "Hentai", "?prefix <prefix>"]
    let type = ["WATCHING", "STREAMING"]
    let rstatus = Math.floor(Math.random() * status.length);
    let rtype = Math.floor(Math.random() * type.length);

    client.user.setActivity(status[rstatus], type[rtype]);

  }; setInterval(randomStatus, 6000)// 6s (Seconds)


  new WOKCommands(client, 'commands','features', 'messages.json')
    .setDefaultPrefix('?') // There will be a number of functions you chain together here
    .setCategoryEmoji('Admin', '👑')
    .setCategoryEmoji('Fun', '🎮')
    .setCategoryEmoji('Info',`🗣`)
    .setCategoryEmoji('Economy', '💸')
    .setCategoryEmoji('JoJoke', `👌`)
    .setCategoryEmoji('Post', `🗨`)
    .setMongoPath(process.env.MONGO_URI)
    .setBotOwner(['268914030528299008'])
})

client.login(process.env.TOKEN)