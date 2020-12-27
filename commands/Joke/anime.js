const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random // Import the package...
const subreddits = [
    "animememes",
    "Animemes",
    "anime",
    // You can add as many as you wish...
]

module.exports ={
    commands: ["animeme", 'am'],
    description: 'Grab a meme for the road',
    category: 'JoJoke',
    callback: (message, args, text, client) => {

    let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)] // Generates a random subreddit from the array...
    somethingRandom.getMeme(randomSubReddit).then(res => {
    const embed = new MessageEmbed()
    .setTitle(res.title)
    .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
    .setImage(res.img)
    .setFooter(`👍 ${res.upvotes} | 💬 ${res.comments}`)
    .setAuthor(`From ${res.author}`)
    .setColor('#f542ec')
    message.channel.send(embed)
        })
    }
}