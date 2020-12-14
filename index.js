const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const binner = require('binner')
require('dotenv').config()

const client = new DiscordJS.Client()

client.on('ready', async() => {
  console.log(`[✅ Bot] ${client.user.tag} Online!`)
  //await client.user.setActivity(`Chillin in ${client.guilds.cache.size} Servers`);

    function randomStatus() {
    let status = ["?help", "Anime", "thighs", "Hentai", "?prefix <prefix>", `Chillin in ${client.guilds.cache.size} Servers`]
    let type = ["WATCHING", "STREAMING"]
    let rstatus = Math.floor(Math.random() * status.length);
    let rtype = Math.floor(Math.random() * type.length);
    //let servers = (`Chillin in ${client.guilds.cache.size} Servers`);

    client.user.setActivity(status[rstatus], type[rtype]);

  }; setInterval(randomStatus, 6000)// 6s (Seconds)

  new WOKCommands(client, 'commands','features')
    .setDefaultPrefix('?') // There will be a number of functions you chain together here
    .setCategoryEmoji('Admin', '👑')
    .setCategoryEmoji('Fun', '🎮')
    .setCategoryEmoji('Info',`🗣`)
    .setCategoryEmoji('Economy', '💸')
    .setCategoryEmoji('JoJoke', `👌`)
    .setCategoryEmoji('Post', `🗨`)
    .setMongoPath(process.env.MONGO_URI)
    .setBotOwner('268914030528299008')
})

client.login(process.env.TOKEN)