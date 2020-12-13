const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const profileSchema = mongoose.Schema({
  guildId: reqString,
  userId: reqString,
  coins: {
    type: Number,
    default: 0,
  },
})

const welcomeSchema = new mongoose.Schema({
  // Guild ID
  _id: reqString,
  channelId: reqString,
})

module.exports = mongoose.model('data', profileSchema, welcomeSchema)